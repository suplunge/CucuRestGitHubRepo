$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/basic/hooksOfCucu/HooksTesting.feature");
formatter.feature({
  "line": 1,
  "name": "First Rest Assured test",
  "description": "",
  "id": "first-rest-assured-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 844016820,
  "status": "passed"
});
formatter.before({
  "duration": 595556,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Test my Get Method",
  "description": "",
  "id": "first-rest-assured-test;test-my-get-method",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user hit the get request",
  "keyword": "Given "
});
formatter.match({
  "location": "TestHooks.user_hit_the_get_request()"
});
formatter.result({
  "duration": 3367004608,
  "status": "passed"
});
formatter.after({
  "duration": 133778,
  "status": "passed"
});
formatter.after({
  "duration": 260889,
  "status": "passed"
});
});