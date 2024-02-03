
import os
import yaml
import base64
from flask import Flask, render_template, request
from flask_cors import CORS

from sigma.conversion.base import Backend
from sigma.plugins import InstalledSigmaPlugins
from sigma.collection import SigmaCollection
from sigma.exceptions import SigmaError

app = Flask(__name__)
CORS(app)

plugins = InstalledSigmaPlugins.autodiscover()
backends = plugins.backends
pipeline_resolver = plugins.get_pipeline_resolver()
pipelines = list(pipeline_resolver.list_pipelines()) 
with open('requirements.txt', 'r') as f:
    requirements = f.read()


@app.route('/api/')
def home():
    response = {"message": "Welcome to our api \\home", "pipelines": "pipelines", "requirements": "abcd"}
    return response


@app.route('/api/sigma', methods=['POST'])
def convert():

    # get params from request
    rule = str(base64.b64decode(request.json['rule']), "utf-8")
    
    # check if input is valid yaml
    try:
        yaml.safe_load(rule)
    except:
        print("error")
        return ("Error: No valid yaml input")

    pipeline = []
    if request.json['pipeline']:
        for p in request.json['pipeline']:
            pipeline.append(p)
    target = request.json['target']
    format = request.json['format']

    backend_class = backends[target]
    processing_pipeline = pipeline_resolver.resolve(pipeline)
    backend : Backend = backend_class(processing_pipeline=processing_pipeline)

    try:
        sigma_rule = SigmaCollection.from_yaml(rule)
        result = backend.convert(sigma_rule, format)
        if isinstance(result, list):
            result = result[0]
    except SigmaError as e:
        return "Error: " + str(e)

    return result

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 8000)))