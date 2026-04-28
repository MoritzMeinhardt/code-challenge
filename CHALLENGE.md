# Senior Frontend Engineer Challenge: Product Editor

## Overview
You are given an Angular application with a basic form for editing a product. The application is connected to a mock API.

Your task is to add an autosave feature to this form.

**Time Limit:** 1 hour

---

## Tasks

### 1. Automatic Saving
Implement an automatic saving mechanism for the form.

Consider:
- When should a save be triggered
- How to avoid unnecessary API calls
- How to handle invalid or incomplete input
- How to communicate saving state to the user

---

### 2. Validation
Ensure that the product data meets reasonable validation requirements.

This includes making sure that the product title is unique.

---

### 3. Final Submission Flow
Add a way to explicitly submit the form.

Ensure that:
- The latest data is persisted before submission
- Concurrent operations are handled correctly
- The user receives clear feedback

---

## What We Care About
- How you structure and reason about reactive flows
- How you deal with real-world edge cases
- Trade-offs you make and assumptions you choose
- Clarity and maintainability of your code
