---
layout: simple
title: "Reporting"
---

<div class="reporting" markdown="1">

# REPLACEME

<h2>
  <span class="capitalize">T</span>
  <span class="capitalize-content">
    hanks for helping REPLACEME!
  </span>
</h2>

<div class="content-box">
  <form id="reporting-form" action="" method="POST" target="no-target">
    <div class="form-group">
      <label for="nicknameInput">Nickname</label>
      <input type="text" class="form-control" id="nicknameInput" placeholder="Enter your nickname">
    </div>
    <div class="form-group">
      <label for="emailInput">Email (required)</label>
      <input type="text" class="form-control" id="emailInput" placeholder="Enter your email address">
      <p class="form-text text-muted">This address is required for any questions we might have.</p>
    </div>
    <div class="form-group">
      <label for="sentenceInput">Enter your REPLACEME (required)</label>
      <p class="form-error input-error hidden">We can only handle a maxiumum of 5'000 characters.</p>
      <textarea id="sentenceInput"></textarea>
    </div>
    <div class="form-group">
      <label for="languageInput">Language (required)</label>
      <input type="text" class="form-control" id="languageInput" placeholder="Language">
    </div>
    <div class="form-group">
      <input type="checkbox" class="form-control" id="verifyInput"> I certify that REPLACEME (required)
    </div>
    <p class="form-error general-error hidden">Please check all form fields to make sure everything required is filled out!</p>
    <button type="submit" class="button submit-button">Submit</button>
  </form>

  <div class="afterSubmitInfo hidden">
    <h2>Thanks for submitting your sentences!</h2>
    <a href="{{ site.baseurl }}/upload/">Add new sentences</a>
  </div>
</div>

</div>

<!-- used as target after form submission so we don't go away from our site -->
<iframe src="#" id="no-target" name="no-target"></iframe>

<script src="{{ site.baseurl }}/js/upload.js"></script>
