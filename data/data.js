const TARGET_LIST = [
  "azure",
  "carbonblack",
  "cortexxdr",
  "elastisearch",
  "ibm-qradar-aql",
  "insight_idr",
  "loki",
  "microsoft365defender",
  "opensearch",
  "qradar",
  "sentinelone",
  "sentinelone_pq",
  "splunk",
];

const FORMAT_LIST = ["default", "savedsearches", "data_model"];

const PIPELINE_LIST = [
  "",
  "azure_windows_pipeline",
  "carbonblack_pipeline",
  "carbonblackresponse_pipeline",
  "CortexXDR_pipeline",
  "crowdstrike_fdr",
  "insight_idr_pipeline",
  "microsoft_365_defender_pipeline",
  "qradar-aql-fields",
  "qradar-aql-payloads",
  "sentinelone_pipeline",
  "sentinelonepq_pipeline",
  "splunk_cim",
  "splunk_sysmone_acceleration",
  "splunk_windows",
  "sysmon",
  "windows-logsources",
  "windows-audit",
];

export { TARGET_LIST, FORMAT_LIST, PIPELINE_LIST };
