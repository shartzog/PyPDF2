window.BENCHMARK_DATA = {
  "lastUpdate": 1704682494554,
  "repoUrl": "https://github.com/shartzog/pypdf",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72c169e1e54c6b17cc34890d332efeb6e4948248",
          "message": "MAINT: Replace warning with logging.error (#2377)\n\nCloses #2354",
          "timestamp": "2024-01-02T11:07:49+01:00",
          "tree_id": "2e9035a37b9263d4eb5116fcb8489ff1179bb1cc",
          "url": "https://github.com/shartzog/pypdf/commit/72c169e1e54c6b17cc34890d332efeb6e4948248"
        },
        "date": 1704682494180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.397932760502293,
            "unit": "iter/sec",
            "range": "stddev: 0.008283723967504517",
            "extra": "mean: 294.29658280000126 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.727495753493919,
            "unit": "iter/sec",
            "range": "stddev: 0.006814378530498714",
            "extra": "mean: 78.57005175000609 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2730854798896667,
            "unit": "iter/sec",
            "range": "stddev: 0.02791757278106549",
            "extra": "mean: 3.6618570873999774 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.558886994003192,
            "unit": "iter/sec",
            "range": "stddev: 0.000335353886327169",
            "extra": "mean: 56.95121794117848 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.06154469027469771,
            "unit": "iter/sec",
            "range": "stddev: 0.127299047859574",
            "extra": "mean: 16.248355390799986 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}