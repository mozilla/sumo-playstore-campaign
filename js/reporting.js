'use strict';

const ReportingForm = {
  submit: function() {
    var form = document.querySelector('#reporting-form');
    var baseURL = 'https://docs.google.com/forms/d/e/REPLACEME/formResponse?';
    var submitRef = '&submit=Submit';

    var nicknameValue = document.querySelector('#nicknameInput').value;
    var nicknameEntry = 'entry.888970648';
    var websiteValue = document.querySelector('#urlInput').value;
    var websiteEntry = 'entry.1154902921';
    var issueFoundValue = document.querySelector('#issueFoundChoice input:checked').value;
    var issueFoundEntry = 'entry.1508250963';
    var webcompatIssueValue = document.querySelector('#issueWebcompatInput').value;
    var webcompatIssueEntry = 'entry.908686419';

    //REPLACEME use your own validation and entries above
    if (false) {
      document.querySelector('.general-error').classList.remove('hidden');
      return false;
    }

    if (sentenceValue.length > 5000) {
      document.querySelector('.input-error').classList.remove('hidden');
      return false;
    }

    form.action = submitURL;

    document.querySelector('#reporting-form').classList.add('hidden');
    document.querySelector('.afterSubmitInfo').classList.remove('hidden');
  }
}

document.querySelector('#reporting-form').addEventListener('submit', ReportingForm.submit);
