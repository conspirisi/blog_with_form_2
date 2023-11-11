---
layout: base.njk
title: Contact Page
---

# Contact Us

<form action="/submit-form" method="post">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control myWidth" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" class="form-control myWidth" id="email" name="email" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
 
</form>
