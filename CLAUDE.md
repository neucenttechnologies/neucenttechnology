# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A **static crawl of the WordPress site www.neucenttechnologies.com** (WP Rocket-minified assets), not a source project. There is no build system, package manager, linter, or test suite. Edit the HTML/CSS/JS directly. Remote is `github.com/neucenttechnologies/neucenttechnology` (`main`). `git` is not on the PATH of the PowerShell tool here; the history is small (a single clone commit when last checked).

Preview from the repo root with `python -m http.server 8000` and open http://localhost:8000. This is static only: the `submitform.php` contact handlers need PHP and MySQL, so submitting a form does nothing under that server.

## Structure and conventions that aren't obvious

- **Partial mirror.** Present: `index.html` (home), `index2.html` (a much shorter home-page variant, 1 `<section>` vs 12, that no page links to), `about-us/`, `contact-us/`, and `feed/` + `comments/feed/` stubs. The nav and footer link to many pages that are **not in the repo** (`services/…`, `portfolio/…`, `industry/…`, `readymade-app-solutions/…`, etc.), and `wp-includes/` (referenced for jQuery/polyfills) is absent, so those links and scripts are dead locally.
- **No templating.** Header, footer, popups and the contact forms are copy-pasted into every page, so shared changes must be repeated in each HTML file.
- **Paths were rewritten by the crawler.** The root page uses `assets/…`; subpages use `../assets/…`. Canonical, feed and internal links point at `…/index.html` rather than clean URLs. Keep this relative style or links break when served from a folder.
- **CSS filenames carry crawler suffixes.** `assets/css/style113b.css` and `style0554.css` (likewise `aos`, `bootstrap.min`, `custom`, `hire-page`, `slick`, `slick-theme`, `nice-select`) are byte-identical copies, and `style.css` matches too. Pages actually link the **`…113b.css`** files with `?ver=1741169454`, so edit those (`style113b.css`, `custom113b.css` for site styling) and decide whether to keep the `0554` twins in sync. JS: the `*db46.js` files loaded via `wp-content/cache/min/1/assets/js/…` are the versions in use; `assets/js/custom.js` holds the site's own behavior.
- **Crawl artifacts, not real assets.** The 11 `.html` files in `assets/css/fonts/` (`slick*.html`), `assets/fonts/` (`glyphicons-halflings-regular*.html`) and `assets/assets/css/images/` (`layers*.html`, `marker-icon.html`) are ~92 KB copies of the home page saved in place of missing font/image files. The two `.delayed` files in `assets/images/` are placeholder downloads.
- **Two asset trees.** `assets/assets/` (with `img/`, `svg/`, `vendor/aos`, `vendor/bootstrap-icons`) sits alongside the top-level `assets/css|js|fonts|images|external`. Check both when looking for an asset.
- **Third-party integrations are embedded, not local:** Contact Form 7 (+ redirect plugin), reCAPTCHA v3, Mailchimp for WP footer form, PureChat (`assets/external/widget.js`), Google Tag Manager/Analytics, StatCounter, Inspectlet, and an AI chatbot widget under `wp-content/cache/min/1/ai-chatbot-widget/`. Several script paths (e.g. `../www.google.com/recaptcha/…`) were rewritten by the crawler and don't resolve locally. Some images are hot-linked from `d3puhl2t51lebl.cloudfront.net`.
- Front-end stack: Bootstrap, jQuery, Slick, AOS, nice-select, intl-tel-input, MixItUp, Font Awesome, Poppins (Google Fonts).

## Contact form backends

There are **two different `submitform.php` files**, each wired to a different page:

- `submitform.php` (repo root) is the `action` of the form in `index.html`. It inserts `firstname, lastname, email, phone, message` into a `contact` table on a **remote MySQL server with credentials hard-coded in the file** (committed to the GitHub repo). Treat those credentials as exposed: rotate them, and never copy them into docs, commits or CLAUDE.md.
- `contact-us/submitform.php` is the `action` of the form in `contact-us/index.html`. It inserts into a `projectquote` table (adds `budget_range`) on `localhost` as `root` with an empty password (XAMPP defaults).

Both build SQL by interpolating raw `$_POST` values (SQL-injectable) and do no validation or reCAPTCHA check. The remaining forms (`about-us`, popups, footer subscribe) still post to the original WordPress endpoints and are inert in this snapshot.

## Owner direction (from the conversation, not derivable from the code)

- The owner wants to rebuild the site as a **new, original** site for an IT software company (web and mobile apps, with a focus on AI applications), using ongraph.com only as inspiration. Everything must be original: no copied text, layout or images, and **no copyright notice**. They chose a WordPress theme and replacing the mirror in place. A first version of that theme was built and tested, but it was never committed and is no longer in this folder, so do not assume it exists.
- `assets/images/ong-logo.png` is an OnGraph asset, and `assets/assets/svg/logos/logo*.svg` come from a purchased template (they spell "Front"), so neither is Neucent's. The real logos are `assets/images/neucent-logo.png` and `assets/images/circle_neucent_logo.png`.
- **Deployment caution:** the live server serves this repo's root as the web root and has no WordPress installed. Deploying theme files there blanked the whole site, because a theme's `index.php` exits when WordPress isn't loaded. A WordPress theme must be installed through WordPress (`wp-content/themes/`), never uploaded to the web root. Also keep `CLAUDE.md` out of any deploy, since it would be publicly readable.
