window.BENCHMARK_DATA = {
  "lastUpdate": 1705721086597,
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
      },
      {
        "commit": {
          "author": {
            "email": "96178532+stefan6419846@users.noreply.github.com",
            "name": "Stefan",
            "username": "stefan6419846"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfd87127d1816e16bb48e083d70c21e59289f166",
          "message": "TST: Correctly close temporary files (#2396)\n\nImprovement for #2379 to use a common method and appropriately close the temporary files.\r\n\r\nFixes #2394",
          "timestamp": "2024-01-06T21:03:48+01:00",
          "tree_id": "4e2e78661ab107d250094fd39d9033c669bc6b54",
          "url": "https://github.com/shartzog/pypdf/commit/cfd87127d1816e16bb48e083d70c21e59289f166"
        },
        "date": 1704682532164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.3272833672594855,
            "unit": "iter/sec",
            "range": "stddev: 0.0055454318526094466",
            "extra": "mean: 300.5454869999994 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.762577305363681,
            "unit": "iter/sec",
            "range": "stddev: 0.0070618281429734526",
            "extra": "mean: 78.35407974999953 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2727630746562621,
            "unit": "iter/sec",
            "range": "stddev: 0.014879118921031286",
            "extra": "mean: 3.666185392799986 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 16.553203200883218,
            "unit": "iter/sec",
            "range": "stddev: 0.0017924958450182022",
            "extra": "mean: 60.41126831250665 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.062074622040632625,
            "unit": "iter/sec",
            "range": "stddev: 0.0746523053593669",
            "extra": "mean: 16.109642992999987 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47760929+shartzog@users.noreply.github.com",
            "name": "shartzog",
            "username": "shartzog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cec0be3d27954db05f23b70e8a135cde1f55bab7",
          "message": "Merge branch 'text-layout-mode' into main",
          "timestamp": "2024-01-07T21:56:51-05:00",
          "tree_id": "0e5d1d6aba5bb655f3e3ab79333e1da82cc2f6c2",
          "url": "https://github.com/shartzog/pypdf/commit/cec0be3d27954db05f23b70e8a135cde1f55bab7"
        },
        "date": 1704682935974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.3525483681992356,
            "unit": "iter/sec",
            "range": "stddev: 0.006690600027662301",
            "extra": "mean: 298.28055860000404 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.758326054079308,
            "unit": "iter/sec",
            "range": "stddev: 0.007627310003010624",
            "extra": "mean: 78.38018841666639 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.26942960578657976,
            "unit": "iter/sec",
            "range": "stddev: 0.021116223455096457",
            "extra": "mean: 3.7115446057999977 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.349321988140083,
            "unit": "iter/sec",
            "range": "stddev: 0.0011912741174582326",
            "extra": "mean: 57.63914005882163 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.06141685482494199,
            "unit": "iter/sec",
            "range": "stddev: 0.0986404822518595",
            "extra": "mean: 16.2821753548 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47760929+shartzog@users.noreply.github.com",
            "name": "shartzog",
            "username": "shartzog"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cec0be3d27954db05f23b70e8a135cde1f55bab7",
          "message": "Merge branch 'text-layout-mode' into main",
          "timestamp": "2024-01-07T21:56:51-05:00",
          "tree_id": "0e5d1d6aba5bb655f3e3ab79333e1da82cc2f6c2",
          "url": "https://github.com/shartzog/pypdf/commit/cec0be3d27954db05f23b70e8a135cde1f55bab7"
        },
        "date": 1704683517558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.3896424166423236,
            "unit": "iter/sec",
            "range": "stddev: 0.005083285667293945",
            "extra": "mean: 295.01636960000326 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.704311666577729,
            "unit": "iter/sec",
            "range": "stddev: 0.007475073652891832",
            "extra": "mean: 78.71343416666814 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2721831680729733,
            "unit": "iter/sec",
            "range": "stddev: 0.021051251851026215",
            "extra": "mean: 3.6739964748000005 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.33934334914042,
            "unit": "iter/sec",
            "range": "stddev: 0.0005264308810479648",
            "extra": "mean: 57.672310875000576 msec\nrounds: 16"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.05893967101606086,
            "unit": "iter/sec",
            "range": "stddev: 0.10192404161220642",
            "extra": "mean: 16.966501216599994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "committer": {
            "email": "info@martin-thoma.de",
            "name": "Martin Thoma",
            "username": "MartinThoma"
          },
          "distinct": true,
          "id": "facd6fd806711963192e2a6ff77d4c74519447ee",
          "message": "DOC: Add shartzog as a contributor for #2388",
          "timestamp": "2024-01-19T16:13:26+01:00",
          "tree_id": "1e0eac98c1edb2422675e56ed27c040a47a9aa72",
          "url": "https://github.com/shartzog/pypdf/commit/facd6fd806711963192e2a6ff77d4c74519447ee"
        },
        "date": 1705721085638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/bench.py::test_page_operations",
            "value": 3.369419217892809,
            "unit": "iter/sec",
            "range": "stddev: 0.005619830854036436",
            "extra": "mean: 296.7870530000084 msec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_merge",
            "value": 12.771730064994287,
            "unit": "iter/sec",
            "range": "stddev: 0.007211384143079261",
            "extra": "mean: 78.29792791666297 msec\nrounds: 12"
          },
          {
            "name": "tests/bench.py::test_text_extraction",
            "value": 0.2719263175214847,
            "unit": "iter/sec",
            "range": "stddev: 0.040999515865471084",
            "extra": "mean: 3.6774667825999985 sec\nrounds: 5"
          },
          {
            "name": "tests/bench.py::test_read_string_from_stream_performance",
            "value": 17.46767369627702,
            "unit": "iter/sec",
            "range": "stddev: 0.000935494460694403",
            "extra": "mean: 57.24860776470397 msec\nrounds: 17"
          },
          {
            "name": "tests/bench.py::test_image_new_property_performance",
            "value": 0.06073176866609276,
            "unit": "iter/sec",
            "range": "stddev: 0.17898346094282305",
            "extra": "mean: 16.465846820600028 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}