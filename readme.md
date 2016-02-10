# DONOTUSE - Marketo Prefill

⚠️☢️⚠️☢️⚠️☢️⚠️☢️⚠️☢️⚠️☢️

I will preface this by saying this is a fantastic example of the sort of thing responsible developers should run away screaming from (but that marketers love). It should not be used if you value or respect your users right to privacy. This is experimental and probably won't work forever.

**Credit** Goes to Sandy Whiteman for the Original idea, but I'm responsible for this execution. Admittedly he won't touch this with a stick either.

## The Ask

The idea here is to be able to leverage lead data *without* using running into API limits with the existing Marketo Leads API. But say you still wanted to access a lead's unique information without actually using the API?

## Requirements

* Marketo Design Studio Access
* Marketo Landing Pages setup (Note - Due to CORS this 'solution' will not be supported across different domains. Subdomains are A-OK!)
* jQuery on both your Marketo landing page and your site
* NPM & Gulp

## Installation

### Setup your Landing Page / Lead Payload

1. Create a landing page with one of a form in it. It doesn't matter which.
2. Add jQuery via a CDN to this page (other)
3. Update the URL to your main website/application
2. Drop in the `JSON_PayLoad` JSON object and JS script block into a HTML block within this page.

### Add JS module that allows you to receive that payload.

This is just a basic module that sets up a listener for those browser messages. Make sure you update the path to your landing page.
