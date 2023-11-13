---
layout: base.njk
title: Contact Page
---

# Contact Us

      <form action="/destination/" method="get">
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="FirstName">First Name:</label>
                    <input type="text" class="form-control" id="FirstName" name="FirstName" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="Surname">Surname:</label>
                    <input type="text" class="form-control" id="Surname" name="Surname" required>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-4">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
            </div>
            <div class="form-group">
                <label for="freetext">Free Text (up to 150 characters):</label>
                <textarea class="form-control" id="freetext" name="freetext" maxlength="150" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
