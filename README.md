# Inkdrop Release Notes

## v5.10.0
2025-02-21

## Revision history view just got better

Inkdrop keeps a history of changes made in your notes locally. Whenever you save the current version, Inkdrop automatically creates a new 'revision'. This is useful when you want to restore a previous revision.

In earlier versions, you had to select a revision from a dropdown list like this:

![Old revision picker](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:R4Ke9po_/index-public)

It was annoying to select revisions one by one to find the exact revision you want.

In v5.10.0, it has got a timeline-like UI for the revision history, which lets you quickly view your note changelogs:

![Timeline-like UI for revision history](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:bYLBX7pe/index-public)

It displays not only the note body but also changes like notebook moves, tag additions/removals, note status updates, and title changes. Even if you're not restoring an old revision, it's fun to explore your note history!

Click the three-dot button on the right side of each revision to open a popup menu with options:

- Open in separate window
- Restore this revision

![Screenshot 2025-02-21 at 10.58.31](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:EQ6m5QO9/index-public)

Enjoy viewing your tech note chronicle!

The note tags input bar now smoothly animates when adding or removing tags, making the experience slightly more satisfying :)

![Screenshot 2025-02-21 at 10.53.51](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:NOlRkjSD/index-public)

## v5.9.3
2025-01-21

## Bugfix

- fix(preferences): The app randomly infinitely fetches plugin information
- fix(mde): The command `core:toggle-inline-code` prevents typing backticks on Italian keyboards (Thanks [@Alessandro_Baldoni](https://forum.inkdrop.app/t/v5-9-2-problem-with-backtick-on-macos/5107))

## v5.9.2
2024-12-23

## Bugfix

- fix(syntax): remove text color highlightings from the base syntax styles
  - It was a regression from the bugfix for [this issue](https://forum.inkdrop.app/t/v5-9-0-strikethrough-text-not-formatted/5076/5).

## v5.9.1
2024-12-23

## Bugfixes

### syntax-theme: Default base syntax theme isn't properly applied

- Report: [V5.9.0 Strikethrough text not formatted by @Alessandro_Baldoni](https://forum.inkdrop.app/t/v5-9-0-strikethrough-text-not-formatted/5076/2)

### Avoid trying to download a non-html link when pasting a URL

- Report: [Error when inserting a direct link to an executable file by @dgavrilov](https://forum.inkdrop.app/t/error-when-inserting-a-direct-link-to-an-executable-file/4649)

Now it displays an error like so:

![screenshot](https://forum.inkdrop.app/uploads/default/original/2X/0/03ce657f0c8c237fbd9994243d91bccdac1a1f9a.png)

### Duplicated window icons on Windows

- Report: [Duplicated window icons on Pinned Notes by @Alvaro_Gaona](https://forum.inkdrop.app/t/duplicated-window-icons-on-pinned-notes/5066)

![screenshot](https://forum.inkdrop.app/uploads/default/original/2X/2/2757dabca6f5c474130c630c84fdefa6385bdda5.jpeg)

### Other fixes

- fix(mde): add `selectionOnly` option for `core:toggle-inline-code` (experimental)
  - Thanks [Sachin_A](https://forum.inkdrop.app/t/add-a-command-for-toggling-inline-code/2586/10?u=craftzdog)
- fix(theme): checkbox typo
  - Thanks [alvgaona](https://github.com/inkdropapp/base-ui-theme/pull/1)
- fix(sidebar): reduce indent width for nested sidebar menu items

## v5.9.0
2024-12-03

## 🔎 The full-text search engine is now language-agnostic

> [!NOTE]
> This is the same update on [mobile v5.4.0](https://forum.inkdrop.app/t/inkdrop-mobile-v5-4-0-ground-up-improvements/4975)

This update would solve this issue: [Odd searching issue when searching for text](https://forum.inkdrop.app/t/odd-searching-issue-when-searching-for-text/4477)

The app had been using the language-dependent tokenization processes called [Porter stemming algorithm](https://tartarus.org/martin/PorterStemmer/) and a Japanese-specific segmentation algorithm.
In some cases, they cause some odd searching issue, where [you can't find notes with particular keywords](https://forum.inkdrop.app/t/odd-searching-issue-when-searching-for-text/4477).

I recently found that SQLite3 officially supports [the trigram tokenizer](https://forum.inkdrop.app/t/odd-searching-issue-when-searching-for-text/4477/3?u=craftzdog).
I managed to migrate to it. Now, you can use any languages including Chinese, Japanese, Arabic, etc., in your notes!
Also, it fully supports partial matching, so it is optimal for searching code snippets.
For example, it can properly find a note with a code fragment like `"er } = require("`.

![trigram-demo](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:1gCh5Ch8/index-public)

## 🕵️‍♀️ Highlight matched keywords in the note list

![highlight-matched-keywords](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:nF_3MZmI/index-public)

As you can see in the above screenshot, it now can highlight matched keywords in the note list, which would help you more quickly find your desired note.

## 🎨 Theming is now simpler than ever

I'm so excited to announce that Inkdrop has got a new theming system!

I've been working on refactoring the app's theming system to make it easier to customize and maintain for future versions.
The UI components were originally from [Semantic UI](https://semantic-ui.com/), and Inkdrop has relied on its well-designed theming system based on [LESS](https://lesscss.org/), an alternative stylesheet language with some extended syntaxes like variables.

However, modern CSS now supports a lot of features that LESS has provided, such as CSS variables and CSS nesting. Moreover, CSS supports cascade layers, which allow you to control the specificity and order of rule sets across stylesheets. They would be very useful for theming in Inkdrop.

The main issue was that Semantic UI themes include everything from resets and layouts to buttons, dropdowns, and menus. This is because Semantic UI's theming architecture wasn't designed to be dynamically loaded or switched.
This limitation has prevented me from adding new UI components and updating current designs.
Also, it was hard to understand the LESS-based theming architecture for contributors, including Gulp tasks for building it.

The new theming system is much simpler. All you have to do is customize CSS variables. No pre-compilations needed.
For example, here is a part of [the new Solarized Dark UI theme](https://github.com/inkdropapp/solarized-dark-ui):

```css
:root {
  --primary-color: hsl(var(--hsl-blue-500) / 90%);
  --input-background: var(--color-bg);
  --page-background: var(--color-bg);
  --text-color: hsl(var(--hsl-fg));
  --link-hover-color: var(--color-blue-300);
  --sidebar-background: var(--color-bg);
  --note-list-bar-background: hsl(var(--hsl-bg-muted-highlight));
  --note-list-bar-border-right: 1px solid hsl(var(--hsl-base02));
}
```

Instead of using LESS variables to let you customize component styles, the app now refers to these CSS variables to apply customizations on top of the default styles with CSS cascading layers.
This way, I can safely change the existing styles and add new components without making breaking changes to the existing themes.
If I were to add new components, I could define new CSS variables with fallback values, something like:

```css
.new-component {
  background: var(--new-component-background, var(--strong-transparent-black));
}
```

If `--new-component-background` isn't defined in your theme, it automatically falls back to `--strong-transparent-block`. Neat.

Please check out the updated guide on [how to create a theme here](https://developers.inkdrop.app/guides/create-a-theme)!

### 🍻 The acrylic translucent background support is back on Windows!

Since Electron started supporting the `backgroundMaterial` option for Windows, the acrylic effect has returned now!

![Enable acrylic translucent background](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:WUwlT5HE/index-public)

However, there is a critical bug preventing it from working properly on frameless windows.
To resolve this, I had to add a system window title bar, but it actually doesn't look so bad.

![Acrylic effect light on Windows](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:bn8Ktol9/index-public)

![Acrylic effect dark on Windows](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:4vjBJmp2/index-public)

The default light and dark themes support the acrylic translucent background out of the box, so [Vibrant Dark UI](https://my.inkdrop.app/plugins/vibrant-dark-ui) will be deprecated soon.

Check out [the documentation on how to make your theme support the acrylic background mode](https://developers.inkdrop.app/guides/create-a-theme#acrylic-background-support).

### 💪 Mobile support (in the future)

Users have been requesting more themes on the mobile app ([1](https://forum.inkdrop.app/t/theme-customization-on-mobile/2006), [2](https://forum.inkdrop.app/t/theme-request-for-mobile-black-theme/4251), [3](https://forum.inkdrop.app/t/black-ui-theme-for-mobile/2421)).
I've been exploring a way to port custom themes to the mobile version.
Previously, this was impossible since the mobile app is built with React Native, where CSS can't be simply applied to the UI components.
But as the new theming system relies on the CSS variables, you can now generate a JSON file from the theme.
You can simply run the `generate-palette` command in the theme repository.
Check out [the documentation for more details](https://developers.inkdrop.app/guides/create-a-theme#generating-palette-json).

It still needs more work though, I can't wait to bring your themes into the mobile app!

### 👀 Minor design improvements

I've rewritten the default UI themes for migrating to the new theming system.
Here are what they look like now:

![New default light UI](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:JkBRdTpA/index-public)

![New default dark UI](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:XEDWdB8Q/index-public)

#### 😎 Editor drawer animations

![editor-drawer-demo](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:at1kOUJq/index-public)

### 🎊 New themes: Solarized Light and Dark UI

They also support the acrylic background! I love them.

- [solarized-light-ui](https://my.inkdrop.app/plugins/solarized-light-ui)

![Solarized Light UI with Acrylic Background](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:tXzwLE4b/index-public)

- [solarized-dark-ui](https://my.inkdrop.app/plugins/solarized-dark-ui)

![Solarized Dark UI with Acrylic Background](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:Z1LkB6hs/index-public)

I hope you like them!

## Migrating your themes to the new system

While the app still has a backward-compatibility for the old UI themes, I would strongly encourage the theme creators to update their UI themes, or they will eventually be broken since I'm planning to add new features with new UI components.
So, please check out [the updated guide in the docs](https://developers.inkdrop.app/guides/create-a-theme#acrylic-background-support).

If you have any questions, feel free to post questions on [the "Developers & API" category on the user forum here](https://forum.inkdrop.app/c/developers/17).

### Change the Inkdrop target version to "^5.9.0"

Do not forget to update the "engines.inkdrop" field in your `package.json` to `^5.9.0` so that the update won't be installed on the older version and surprize the users. It should be something like this:

```json
{
  ...
  "engines": {
    "inkdrop": "^5.9.0"
  }
}
```

## Other improvements

- feat(context-menu): add 'Paste as Plain Text' to the editor context menu
  ![Paste as Plain Text context menu #x-small](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:rOo4VOJN/index-public)
- Bump up Electron to 31.6.0
- Bump up PouchDB to 9.0.0
  - Hopefully it will solve [this error](https://forum.inkdrop.app/t/error-on-closing-inkdrop-on-win-11/4561)
- Display the loading indicator when loading more plugins (Thanks Palmar)
- Allow raw HTML when **Copy as Simple HTML** (Thanks [fuyuton](https://forum.inkdrop.app/t/manually-written-html-tags-will-not-be-output-by-copy-as-simple-html/5026/))

## Bug fixes

- fix(dialog): `updatedAt` should not be updated when the note gets moved
- fix(theme): Cannot enable Vibrant dark theme on the light mode on the system (Thanks [SDO and Marco](https://forum.inkdrop.app/t/can-not-enable-vibrant-dark-theme/4595))
- fix(redux): prevent performing some actions on the non-existing notebooks (Thanks [Akiya-san](https://forum.inkdrop.app/t/when-i-open-it-in-the-windows-version-its-all-dark/4612)
  - Prevent opening another note when failing to save the current note
  - Prevent creating a new note in the notebook that does not exist
  - Display an error dialog when failing to create a new note
- fix(layouts): editor view icons overlap with Search / Replace buttons (Thanks [Marco](https://forum.inkdrop.app/t/editor-view-icons-overlap-with-search-replace-buttons/4638))
- fix(layout): missing window buttons on the error blank slate (Thanks [gaeulbyul](https://forum.inkdrop.app/t/window-buttons-may-disappear-in-some-situations/4716))
- fix(preview): odd spacing in the metadata pane (Thanks [Lukas and Dmitry](https://forum.inkdrop.app/t/spacing-between-backlinks-is-not-uniform/4710))
- fix(preferences-plugins): queries should be debounced
- fix(theme): Missing olive tag color (Thanks [Lukas](https://forum.inkdrop.app/t/theme-default-dark-ui-missing-color-olive/4491))
- fix(preferences-plugins): Blank screen from search on filter of Installed plugins (Thanks [Bundit](https://forum.inkdrop.app/t/blank-screen-from-search-on-filter-of-installed-plugins/4605))

## v5.8.1
2024-05-01

[![2024-04-30_Inkdrop Desktop v5.8.1_thumb-play](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:lvcTjfVLb/index-public)](https://youtu.be/pVLpsaJzG1U)

## Bug fixes

### 😓 The 'Readable line length' option has been disabled by default

The 'Readable line length' option was introduced on [v5.8.0](https://forum.inkdrop.app/t/inkdrop-desktop-v5-8-0/4511#new-option-readable-line-lengths-15). But, this option made the existing users so confused as they reported on the forum ([1](https://forum.inkdrop.app/t/weird-padding-after-the-update-5-8-0/4514), [2](https://forum.inkdrop.app/t/note-taking-view-seems-broken/4568/2), [3](https://forum.inkdrop.app/t/the-page-editor-rendering-is-not-resizing/4551), [4](https://forum.inkdrop.app/t/the-editor-view-is-not-stretched-to-the-left/4516), [5](https://forum.inkdrop.app/t/blank-space-appears-on-the-editor-screen/4512)). Then, [Shimizu-san suggested](https://forum.inkdrop.app/t/readable-line-length-option-is-not-accepted/4569) that it'd be nice not to enable this option by default and I agreed.

I learned that, even if it's a popular feature on other note apps, changing the default behavior would make the existing users confused. I'll be more careful when changing the default behavior next time.

Sorry for the confusion!

### 🎨 \[Theming\] Embed the default preview theme in the app

In v5.8.1, the app would solve the following issue by embedding the default preview theme:

- GFM Alerts not working on community preview themes (Thanks [Kentaro and taichi](https://forum.inkdrop.app/t/there-might-be-a-bug-in-rendering-alerts/4529)

The problem is that themes have to provide every style, which requires to update when the app gets a new feature with a stylesheet. Since we can't expect every theme developer to sustainably and quickly update their themes, it'd be nice to have the default styles instead of requiring the themes to include every style. So, from this version, themes basically 'override' the default theme.

https://github.com/inkdropapp/inkdrop-github-preview-theme

The default preview theme `github-preview` now doesn't apply any styles. If you create a new preview theme, you only have to add styles for customizations.

This way, the existing preview themes can continue working without updating, like GFM Alerts.

In the future, I'll make the same change to the UI themes.

### Other bugfixes

- Wrong icon in 'Apps and Features' list on Windows (Thanks [Dmitry](https://forum.inkdrop.app/t/default-electron-icon-in-apps-and-features-list/4548))
- Scroll positions get reset when changing the layout (Thanks [Ivan](https://forum.inkdrop.app/t/keep-the-edit-location-when-toggle-side-bar/4545))
- Random crashes when quitting Inkdrop on Windows (Thanks [Patrick](https://forum.inkdrop.app/t/error-on-closing-inkdrop-on-win-11/4561))
- The 'Create' button does nothing on the Paste URL as Link dialog (Thanks [Patrick](https://forum.inkdrop.app/t/paste-of-url-does-nothing-on-hitting-create/4559))
- Duplicate menu items in the Trash notebook (Thanks [Dmitry](https://forum.inkdrop.app/t/duplicate-items-in-the-context-menu/3599/5?u=craftzdog))
- dev-tools: Copy tag id from sidebar throws an error (Thanks [Lukas](https://forum.inkdrop.app/t/plugin-dev-tools-copy-tag-id-from-sidebar-throws-an-error/4570))

## Improvements

### 🎨 Update the GitHub preview theme to match the latest GitHub styles

The default preview theme was outdated, so it has been updated based on [this reopsitory](https://github.com/sindresorhus/github-markdown-css). This also fixes the task list identation issue (Thanks [Dmitry](https://forum.inkdrop.app/t/no-text-indentation-in-checklist-preview/4536)).

### 🎨 Apply the syntax theme to codeblocks in the Markdown preview (Needs update)

While working on simplifying theming the Markdown preview styles mentioned above, I thought it'd be nice to support applying the current syntax theme to the codeblocks in the preview pane automatically. It allows you to avoid making another preview theme just for changing the codeblock syntax highlighting styles.

For example: Solarized Dark

[![Solarized Dark](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:-9cyFnTmz/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:-9cyFnTmz/index-public)

Solarized Light:

[![Solarized Light](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:1Weo0dhfD/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:1Weo0dhfD/index-public)

#### How to make your syntax theme support it

The Markdown renderer now adds a class name `.codeblock` to the enclosing `div` elements of the codeblocks. So, it is easy to add styles to them just by adding a CSS selector `.mde-preview .codeblock pre` to your stylesheet like so:

```
diff --git a/styles/index.css b/styles/index.css
index 14ae539..3f6bcbb 100644
--- a/styles/index.css
+++ b/styles/index.css
@@ -26,7 +26,8 @@ http://ethanschoonover.com/solarized/img/solarized-palette.png
   --base-magenta: #d33682;

   /* Color scheme for code-mirror */
-  .CodeMirror {
+  .CodeMirror,
+  .mde-preview .codeblock pre {
     color-scheme: dark;

     color: var(--base05);
     .cm-header {
       color: var(--base-yellow);
     }
```

Check out [Solarized Dark Syntax](https://github.com/inkdropapp/inkdrop-solarized-dark-syntax-theme) for more detail.

### ⚙️ Better Preferences UI

The setting items have been organized and it has got much easier to find and change settings.

[![Better setting UIs](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:2HqnvlOPy/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:2HqnvlOPy/index-public)

And the Plugins page has got a filter input:

[![Filter installed plugins with keyword](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:ksYfsq6pr/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:ksYfsq6pr/index-public)

### ⚙️ New editor option: "Paste URL as link"

The "Paste URL as link" feature sends a request to the remote server when pasting a URL, which would be an unwanted behavior for some people (Thanks [Ryota](https://forum.inkdrop.app/t/how-disable-auto-link-title/4558)). Now, you can disable it via:

- **Preferences** -> **Editing** -> **Markdown** -> **Paste URL as link**

[![Preferences](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:7bFuyciCn/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:7bFuyciCn/index-public)

### 🔗 Avoid triggering 'Paste URL as link' when the cursor is in the middle of the link

For example, when you type `[link title](|` (`|` is the cursor position) and hit <kbd>Cmd/Ctrl-V</kbd>, it shouldn't trigger the paste-as-link dialog.

## Internal changes

### Adopting Cascade Layers

I've made a lot of changes in theming mentioned above. To accomplish that, it now adopts [Cascade layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers). It would make theming much simpler. They allow themes to avoid rule specificity issues. Inkdrop will bundle more default styles in the future versions, and with cascade layers, custom themes will only need to override the default styles rather than including every style.

UI, syntax, and preview themes are automatically enclosed with the corresponding cascade layer in v5.8.1. The order of precedence is defined as the following at the moment:

```
@layer reset, base, tokens, theme, theme.ui, theme.preview, theme.syntax;
```

- `reset`: Reset styles
- `base`: The app base styles
- `tokens`: CSS common variables
- `theme.ui`: UI theme
- `theme.preview`: Preview theme
- `theme.syntax`: Syntax theme

## v5.8.0
2024-04-03

[![2024-04-02_Inkdrop desktop v5.8.0_thumb2-play](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:ofdZM_W4O/index-public)](https://youtu.be/4-Db8eiJ0_o)

I'm excited to announce v5.8.0, which has got so many improvements and new features!
Thank you for giving me feedback during the beta testing :D

## Inter-note workflow improvements

v5.8.0 works much more efficiently in connecting your notes.

### 🆕 Backlinks

If you connect your notes with internal links, you may want this feature.
You've got a metadata panel at the top of the preview pane, which displays the note information including backlinks:

[![v5-8-0_backlinks](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:B6Fpsr-8l/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:B6Fpsr-8l/index-public)

Backlinks are the notes linked to the current note.
If another note has a link to the current note, it appears in the backlinks section.
With backlinks, you can quickly jump around related notes.

### Tip: Wiki-style link creations

If you are used to writing Wiki, do you know Inkdrop supports creating placeholder links? It is simple. Just write a link without an URI!

```
- [Link title]()
```

Then, click it on the preview pane and it will create a new note with the title. As of v5.8.0, it automatically updates link titles in the note when you change the note title.

### 🆕 Create a new note from the selection

When debugging a bug, you sometimes find another issue to solve as your investigation goes deeper. You already took some notes on the new issue. Inkdrop doesn't block your concentration by allowing you to create a new note from the selection.

First, select the text and right-click it on the editor:

[![v5.8.0-beta.1_create-new-note-from-selection_01](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:eQzNYZaJV/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:eQzNYZaJV/index-public)

A dialog shows up, then input a note title:

[![v5.8.0-beta.1_create-new-note-from-selection_02](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:iREk41NjW/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:iREk41NjW/index-public)

Hit <kbd>Enter</kbd>, and you get a new note with the selected text.

[![v5.8.0-beta.1_create-new-note-from-selection_03](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:m-WMQ5F9a/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:m-WMQ5F9a/index-public)As you can see, you already have a backlink from the source note. You can click it to go back.

[![v5.8.0-beta.1_create-new-note-from-selection_04](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:qS5q_-EaZ/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:qS5q_-EaZ/index-public)

The selected text is replaced with a link to the new note.

- New command:
  - `core:new-note-from-selection`

### 🙌 Remember the scroll positions

When writing a note while referring to other notes, it was frustrating to always get the cursor and scroll positions to be reset when going back to the note. In order to help you work with multiple notes efficiently, v5.8.0 now remembers the cursor and scroll positions in the navigation history.

In the above example, when clicking a backlink, the cursor position is already where the new link is created.

## Navigation improvements

### 🫡 Preserve the note list order when clicking a tag on the note list item

The tag labels on the note list allow you to click to filter by a tag, which is handy to quickly narrow down to a specific topic on the list. By design, it was using the full-text search feature internally, which always changed the sort order to 'Best match'. It looked strange as you just intended to filter the current notes, but not to search with keywords, so the list sort order should be preserved. As of v5.8.0, it now properly preserves the sort order when filtering by a tag.

For example, some notes are tagged with 'v5.8.0'. Currently, the note list displays all the notes in a workspace of the notebook 'Inkdrop', ordered by last modification dates in descending order. You want to filter notes by the tag by clicking it on the note list item.

[![v5.8.0-beta.1_preserve-note-list-sort-order_01](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:eI86r2uX4/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:eI86r2uX4/index-public)

Then, the note list displays only notes with the tag 'v5.8.0'. Before, it changed the order to 'Best Match'. As of v5.8.0, it preserves the sort order, which is the last modification date in the descending order in this example.

[![v5.8.0-beta.1_preserve-note-list-sort-order_02](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:zFSW1sX2o/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:zFSW1sX2o/index-public)

You can of course change the order from the dropdown menu on the note list header bar anytime.

### 'Go to Workspace' context menu

When you are checking notes in the 'All Notes' on the sidebar, you may feel like quickly jumping into a workspace view of the viewing note. You could open a notebook but it now also lets you go to the workspace view from the context menu of the notebook dropdown menu on the editor:

[![v5.8.0-beta.1_go-to-workspace](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:PzVbjS52Z/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:PzVbjS52Z/index-public)

But what about nested notebooks? Let's say, you see a note in the child notebook, but you want to go to the workspace of the parent notebook. No worries. After selecting the 'Go to Workspace' context menu, the focus moves to the sidebar. Then, you can hit <kbd>Backspace</kbd> to go up to the parent workspace.

[![v5.8.0-beta.1_go-to-workspace_02](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:9ljmf5sQR/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:9ljmf5sQR/index-public)

It is helpful to quickly switch between projects.

- New commands:
  - `editor:go-to-workspace-of-editing-note`
  - `core:sidebar-workspace-go-up`

## Editor improvements

### 🔔 Markdown Alerts syntax support

Recently, GitHub officially supports [Alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts). It is a simple extension of Markdown, which allows you to insert 'alerts' a.k.a. admonitions or callouts. For example:

```
> [!IMPORTANT]
> This is currently a work in progress, expect things to be broken!
```

[![v5.8.0-beta.1_gfm-alerts_01](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:c6cvtAUIq/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:c6cvtAUIq/index-public)

Inkdrop now supports these alerts, too!

[![v5.8.0-beta.1_gfm-alerts_02](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:wElcnzkli/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:wElcnzkli/index-public)

You don't have to remember the syntax. The editor toolbar has got a button for alerts here.

[![v5.8.0-beta.1_gfm-alerts_03](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:7wg_OIJCm/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:7wg_OIJCm/index-public)

- New commands:
  - `core:insert-alert-note`
  - `core:insert-alert-tip`
  - `core:insert-alert-important`
  - `core:insert-alert-warning`
  - `core:insert-alert-caution`

### 🔗 Auto link title

Links are crucial for tech note-taking since you often need to refer to external information from your notes.

I've been using John's [paste-url](https://my.inkdrop.app/plugins/paste-url) plugin to paste URLs as a Markdown link. In this release, I'm happy that it is now officially supported!

For example, you are referring to a bug report on the GitHub repository and you'd like to mention it in your note. You can copy the URL from the browser and paste it in the editor, then a dialog shows up:

[![v5.8.0-beta.1_auto-link-title](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:gD2U5mzPv/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:gD2U5mzPv/index-public)

The app automatically fetches the page title of the given URL. You can choose a link format with up/down arrow keys. It can correctly extract the page title even if the website doesn't support server-side rendering, which is nice.

## UI design improvements

### 🧐 Focus outlines

I wanted to improve a small but fundamental thing - focus indicators. Since some input components like buttons and the search bar didn't have proper focus outlines, you couldn't tell where the current focus is. This improvement makes you a bit more comfortable to press <kbd>Tab</kbd> to move focus around.

[![v5.8.0-beta.1_focus-outlines](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:ezfusyqt8/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:ezfusyqt8/index-public)

### 🔖 Better tag appearances for the dark UI theme

The tag colors were too vibrant when you were on the dark UI theme. As a big fan of using tags, I wanted to make them look more unified for it.

[![v5.8.0-beta.1_tag-redesign-for-dark](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:gxKqYycRI/index-public)](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:gxKqYycRI/index-public)

### New option: Readable line lengths

This option limits the maximum width of the editor and preview panes to prevent excessively long lines of text. Enabled by default.

![New option](https://uploads.inkdrop.app/attachments/user-d975606d93c067c5ef8d6adfb5db83b5/file:VUNwrLDtR/index-public)

## Other improvements and bug fixes

- chore(electron): Bump up to 28.2.6
- fix(ipm): rimraf is not loaded beforehand
- fix(sidebar): hovering sidebar item not highlighting when dragging a note item
- fix(dnd): offset of custom drag layer is incorrect
- fix(database): completed or dropped notes are not properly moved to trash when deleting a notebook
- fix(navigation): Support mouse button 3 and 4 for navigation on Windows and Linux
- fix(semantic-ui): Drop jQuery 😭👍
- fix(process-diff): update internal note links when a note gets renamed its title (Thanks Lukas)
- fix(note-list): Filtering tags with spaces in the tag name does not work (Thanks [Lukas](https://forum.inkdrop.app/t/filtering-tags-with-spaces-in-the-tag-name-does-not-work/4358))
- fix(note-list): Note list not updated when editing so fast

## v5.7.0
2024-01-24

### New features

- feat(mde-preview): support creating a note from an empty link ([Related topic](https://forum.inkdrop.app/t/backlink-support/4287/4?u=craftzdog))
- feat(deep-link): support opening plugin detail from URI
  - Example: <inkdrop://plugin/mermaid>
- feat(command): add `core:copy-note-uri`, which copies a URI of the selected note
- feat(preview): support internal note link expansion: Render rich internal links to enhance connecting notes
- feat(note-list): Support filtering by tag by just clikcing a tag list item on the note list item

### Improvements

- feat(search): clearing the search keywords should not open the last opened note (Thanks [SDO](https://forum.inkdrop.app/t/do-not-reset-note-when-clearing-search-filter/4317))
- feat(sidebar): animate sidebar list items
- feat(sidebar): animate workspace transition
- feat(ui): animate main layout
- fix(editor-title): support moving focus to editor from title input with DOWN key (Thanks [Phil](https://forum.inkdrop.app/t/consistent-keyboard-navigation-between-note-title-and-body/4335))
- fix(redux-store): navigation: push state when opening a workspace (Thanks [picklecillo](https://forum.inkdrop.app/t/navigating-back-from-detail-view-does-not-update-the-notes-list/4333))
- chore(tutorial): Update a Markdown example note
- feat(note-list-bar): Display the created date instead of the last updated date when sorting by created datetime (Thanks [Tempo](https://forum.inkdrop.app/t/how-to-display-date-in-note-preview/4363))

### Bug fixes

- fix(clipboard): cleaning up html unexpectedly removes `\r`
- fix(note-status): make conflicted notes when changing note status via keyboard shortcuts (Thanks [Anon](https://forum.inkdrop.app/t/conflicts-when-statuses-change-quickly/4277))
- fix(proxy): do not use proxy agent with axios. it causes the app to access with a wrong port (Thanks [Shimizu-san](https://forum.inkdrop.app/t/cannot-log-in-under-a-proxy-environment-v5-6-2/4276/2))
- fix(theme-manager): (Internal) ignore the initial `add` event
- fix(package-manager): should ignore the resolve file error (Thanks [Brenton](https://forum.inkdrop.app/t/it-doesnt-fall-back-to-the-default-themes-if-a-custom-one-does-not-exist/4297))
- fix(dropdown): click handler should hide when clicking the dropdown label again when visible (Thanks [Jakub](https://forum.inkdrop.app/t/status-shortcuts-and-drop-menu-issues/2857) and [Simon](https://forum.inkdrop.app/t/status-menu-wont-close-after-clicked-twice/4275))
- fix(keymap): <kbd>cmd-alt-m</kbd> is used by system global shortcut on macOS
  - Changed the keymap for `core:move-to-notebook` from <kbd>cmd-alt-m</kbd> to <kbd>cmd-ctrl-m</kbd>
- fix(redux): the editor should wait for saving the note before closing
- fix(macOS): app hungs when typing text while CapsLock is enabled on macOS (Thanks [Alessandro and Jack](https://forum.inkdrop.app/t/inkdrop-hangs-on-macos-sonoma-with-caps-lock-active/4347))
- fix(macOS): Hangs on macOS Sonoma when opening Finder (Thanks [Shun](https://forum.inkdrop.app/t/hangs-on-macos-sonoma-when-accessing-finder/4365))

## v5.6.2
2023-11-21

## Bugfixes
- fix(note-list): The popup menu for opening notebook not working (Thanks [Shogo-san](https://forum.inkdrop.app/t/v5-6-0-open-notebook/4215))
- fix(keymap): Canceling multi-stroke keymaps not working (Thanks [Markus](https://forum.inkdrop.app/t/keymap-json-keybindings-mess-up-custom-keymaps/4220))
- fix(editor): "Move to notebook" not working properly, where it randomly moves a previously opened note (Thanks [Shimizu-san](https://forum.inkdrop.app/t/issue-with-changing-notebooks-in-inkdrop-5-6/4243))
- fix(editor): Do not transform HTML into Markdown when pasting if it has special markups (Thanks [Jake and Lukas](https://forum.inkdrop.app/t/copy-paste-can-introduce-foriegn-charachters/4249))
- fix(fts): Forward matching not working in the full-text search (Thanks [Thomas](https://forum.inkdrop.app/t/fts-prefix-queries-not-working/4259)) and [SDO](https://forum.inkdrop.app/t/search-is-worse-with-v5-6-0/4230)

## Improvement
- fix(windows&linux): Change a keymap to delete a note from `ctrl-backspace` to `delete`
- chore(electron): Bump up to 25.9.5

## v5.6.0
2023-10-23

## 💨 Faster launch speed

Managed to make it 500-700ms faster 🚀

Here is a demo:

![file_Gs-9UL_8u|433x500](https://forum.inkdrop.app/uploads/default/original/2X/0/0c3f975cfc231e951ba923fc4d86c959cd116295.gif)

**✍️ STORY**: [How I made Inkdrop 500ms faster to launch🚀](https://www.devas.life/how-i-made-inkdrop-500ms-faster-to-launch/)

### Loading plugins lazily

Along with v5.6.0, some plugins have been updated with performance improvements as well. [mermaid](https://my.inkdrop.app/plugins/mermaid) and [math](https://my.inkdrop.app/plugins/math) load their modules only when you open a note that uses one of them. It would keep the launch speed fast even if you installed plugins that require massive modules like them.

## 🎨 Markdown renderer engine update

v5.6.0 has upgraded Remark and Rehype packages to the latest versions. It isn't only an internal improvement but also gives you more possibilities to get useful features. It now has `mdast` and `hast` data in [the preview state](https://developers.inkdrop.app/states/preview), which allows to add syntax-aware features like outline views more easily without relying on regular expressions.

**✍️ STORY**: [Refactoring the extensible Markdown renderer 🛠️](https://www.devas.life/refactoring-the-extensible-markdown-renderer/)

On the other hand, it may cause some plugins not working due to the breaking changes. For plugin developers, I'll post another topic to help you update your plugins.

## 🌈 Built-in paste-as-markdown support

Plugins are useful but it'd be a burden to explore and decide which plugins to install for light users. I wanted to make the app just work out of the box. As a starter, `paste-as-markdown` is now bundled into the app by default. It allows you to paste HTML as Markdown from the clipboard. It'd be useful for copy-and-pasting formatted texts from browsers.

I'm planning to bundle **Mermaid**, **GitHub Emoji**, and **Math** plugins as well.

## 😵 Acrylic window style is not working on Windows

* https://forum.inkdrop.app/t/lag-when-resizing-the-window-with-acrylic-background/4011

On Electron@25.1.1, the module that the app used to support the acrylic window style no longer works, unfortunately. The good news is that Electron itself officially supports the acrylic style for Windows:

* [feat: support Mica/Acrylic on Windows by codebytere · Pull Request #38163 · electron/electron · GitHub](https://github.com/electron/electron/pull/38163)

The bad news is that it is not stable and working as expected – It doesn't work with frameless windows, besides, it becomes unresizable and loses shadows. So, unfortunately, the acrylic window style is not supported on Windows in this release.

## ✨ Nested workspace views
In previous versions, pressing the "Detail" button on the notebook would take you to the workspace view, but you couldn't press the "Detail" button again once you were in that view.
In this update, the "Detail" button is now functional within the workspace view as well!

![nested workspace view](https://forum.inkdrop.app/uploads/default/original/2X/7/70deb1d54021785330b8ff881f949ac253e9c37a.jpeg)

The sidebar now displays the path of the current and parent notebooks:

![nested workspace view 2](https://forum.inkdrop.app/uploads/default/original/2X/b/b4d01ce272032530449d11aa068cd52c488f928b.jpeg)

## Quick notebook picker for moving notes

You can more quickly choose a notebook :D

![notebook picker improved](https://forum.inkdrop.app/uploads/default/original/2X/c/cb7323cd2469b5edaa8ce1e859a9f699ee6be4f2.jpeg)


## ✨ New API documentation (WIP)

![Screenshot 2023-08-29 at 15.01.06|690x439](https://forum.inkdrop.app/uploads/default/optimized/2X/1/17f34dadcd6918de386222e143eeb1fea9adea5c_2_1380x878.jpeg)


I've been working on redesigning the documentation and the new API documentation is now available as WIP.

https://developers.inkdrop.app/

The design is heavily inspired by Stripe, built on top of Tailwind UI. It supports full-text search now. There are still many missing pages and broken links though, your help to improve the doc would be greatly appreciated. It will be more comprehensive and easy to understand and I hope you like it :D

I'll be working on creating a new user manual as well!

## Other bug fixes and improvements

* **improvement(note-list)**: The sidebar now has the "Pinned Notes" section. In "All Notes", pinned notes are no longer displayed on top of the note list.
* https://forum.inkdrop.app/t/copy-paste-bullet-point-from-the-web-unexpected-behaviour/4043
* https://forum.inkdrop.app/t/memory-consumption-is-very-high/2583/15
* [Images are converted into PNG when inserting from the toolbar button](https://forum.inkdrop.app/t/images-are-converted-into-png-when-inserting-from-the-toolbar-button/3967)
* **fix(export)**: Some image files do not have file extensions
* **fix(security)**: Show a confirmation alert when clicking non-https links on the preview (CVE-2023-44141)

- Can't change tag colors (Thanks [Lukas](https://forum.inkdrop.app/t/changing-the-color-of-a-tag-fails/4107))
- Defer updating the preview a bit longer when the preview is not visible (Thanks [Seito](https://forum.inkdrop.app/t/keystrokes-are-slow-in-the-beta-version/4122/5))
- When exporting, use `Untitled` if the note title is empty
- Different modules like `react` get loaded from an incorrect path, which causes the app to crash (Thanks [Jaime](https://forum.inkdrop.app/t/math-plugin-not-working-nor-found/4130))
- The cursor jumps to a wrong position when toggling the side-by-side mode
- The app crashes when uninstalling a plugin from Preferences (Thanks [Lukas](https://forum.inkdrop.app/t/inkdrop-crashes-when-i-uninstall-a-plugin/4141/))
- The note counts are not updated correctly in the workspace views (Thanks [SDO](https://forum.inkdrop.app/t/status-not-updating-for-subnotebook-notes-in-focused-notebook/4151))
- `open()` does not open the url in a browser but opens it in an internal browser window instead (Thanks [Shimizu](https://forum.inkdrop.app/t/v5-6-how-to-use-an-external-browser-with-the-open-method/4145))
- Sidebar display all notes after toggling off a distraction free (Thanks [Bundit](https://forum.inkdrop.app/t/sidebar-display-all-notes-after-toggling-off-a-distraction-free/4111))
- Export does not include notes with completed or dropped status (Thanks @Lukas [Issue](https://github.com/inkdropapp/inkdrop-export-as-markdown/issues/6))

* fix(preview): number of task list items not updated correctly (Thanks [Lukas](https://forum.inkdrop.app/t/task-list-is-not-updated-when-saving-notes/4163))
* fix(html): do not load `browser-commons.js` (Thanks [Lukas](https://forum.inkdrop.app/t/unexpected-error-message-in-the-console/4170/2))
* fix(share): The app crashes when sharing a note (Thanks [Martin](https://forum.inkdrop.app/t/black-window-on-sharing-in-5-6-0-beta-1/4174))
* fix(preferences): Add a note on the acrylic background effect on Windows
* fix(login): The login screen is broken

- fix(server): Local HTTP server not working (Thanks [Raivis](https://forum.inkdrop.app/t/impossible-to-connect-live-export/4147/9))
- fix(editor): floating action buttons not appearing right after the launch (Thanks [Lukas](https://forum.inkdrop.app/t/the-editors-floating-actions-are-not-directly-visible/4187))
- fix(ipm): The CLI command `ipm install` not working (Thanks [Raivis](https://forum.inkdrop.app/t/impossible-to-connect-live-export/4147/8))

## Special thanks

I'd like to mention a few guys who helped me fix bugs and make the app stable.

- @Lukas
- @Raivis
- @Seito_Tanaka
- @Jaime_Armando_Perez
- @SDO
- @shimizu_tatsuya
- @Bundit_Jianpinitnan
- @Martin_Hlozek

Thank you so much for your support as always ❤️

## v5.5.3
2022-12-14

### New features
- **Auto update**: Support disabling auto update and checking for update manually from the application menu (Thanks [Sceptic](https://forum.inkdrop.app/t/check-for-updates-manually/973))
- **Command**: Support opening new note in separate window (Thanks [Ryuki](https://forum.inkdrop.app/t/does-application-quick-note-command-work/3560))
  - `core:new-note-in-separate-window` / <kbd>cmd-shift-n</kbd> on macOS, <kbd>ctrl-shift-n</kbd> on Linux and Windows

### Bugfixes
- **All platforms**: The app randomly crashes (Thanks [Phil, Aleksis, and Dmitry](https://forum.inkdrop.app/t/random-crashes-on-v5-5-2/3582))
  - Bumped up Electron from 16 to 21
- **Markdown Preview**: Empty links cause the app to exit (Thanks [James](https://forum.inkdrop.app/t/incomplete-link-breaks-pdf-export-and-causes-inkdrop-to-exit/3586))
- **Security**: Prevent potential OS injections through the Markdown preview
  - Do not allow `iframe` HTML tags by default. You can enable it back from the preview settings. Only https URLs are allowed.
  - Prohibit `webview` and `object` HTML tags.
- **UI**: Some icon colors are incorrect
- **Note list**: It causes a note conflict when pinning quickly (Thanks [Dmitry](https://forum.inkdrop.app/t/conflicting-note-when-pinning/3592/2))

## v5.5.2
2022-11-15

### Improvements
- **Dev**: Add a link to [dev-tools](https://my.inkdrop.app/plugins/dev-tools) plugin in Preferences
- **Editor**: Remove the file extension from the alt attribute when inserting an image from a file
  - *Before*: `[filename.jpg](inkdrop://file:****)`
  - *After*: `[filename](inkdrop://file:****)`
- **Theme**: Switch the default light/dark themes automatically based on the system preferences (Thanks [Mac and Ben](https://forum.inkdrop.app/t/make-inkdrop-follow-the-dark-light-mode-setting-on-macos-ios/1923/2))
  - You can disable this behavior by setting `core.toggleDarkThemeAutomatically` to `false` in `config.cson`

### Bugfixes
- **Export**: Inline styles not working in exported notes as pdf or html
- **Export**: Canceled dialogs not being handled properly
- **Export**: Do not exclude notes with empty body (Thanks [Magnus](https://forum.inkdrop.app/t/inconsistent-notes-count-on-export-all/3547))
- **UI**: The note list not updating if a conflict happens
- **Editor**: The editor should refresh after changing custom stylesheets
- **Editor**: The app crashes when inputting a title longer than 128 characters (Thanks [Danielsec](https://forum.inkdrop.app/t/note-title-longer-than-128-chars-results-in-crash/3071))
- **Markdown Preview**: Task checkboxes get wrong position when the item is empty
- **Local server**: The numeric parameters for `_changes` work incorrectly
- **Local server**: `GET /tag:<id>` not working
- **App**: Notes not being saved when immediately quitting after editing (Thanks [Ryuki](https://forum.inkdrop.app/t/edited-content-disappers-when-i-close-app-immediately-after-editing/3445))

## v5.5.1
2022-04-26

## Bug fixes

- **Windows & Linux**: Cannot choose individual Markdown files on Windows or Linux when importing (Thanks [Wakate and Chanakan](https://forum.inkdrop.app/t/importing-files-bug-on-windows/2959)
- Specify `font-family` for the in-editor input dialog (Thanks [Otawara](https://forum.inkdrop.app/t/jump-to-line/2852))
- Align deeply indented lists (Thanks [Otawara](https://forum.inkdrop.app/t/topic/1777/13))
- Handle config load errors (Thanks [Takeshi](https://forum.inkdrop.app/t/inkdrop-crash-after-uninstalling-vim-plugin/2863))
- `<style>` tag in note is not working
- `title` attribute of `img` is not being properly rendered in preview
  - eg. `![alt](path/to/img TITLE)`

## Improvement

- Remember distraction free mode on next launch (Thanks [VGB, Ron, and Acekay](https://forum.inkdrop.app/t/remember-distraction-free-status-on-launch/2508)
- Better welcome guide for new users

## Breaking changes

- **Windows**: Change shortcut keys for changing note status for Windows as they are not working (Thanks [Jakub](https://forum.inkdrop.app/t/status-shortcuts-and-drop-menu-issues/2857))
  - <kbd>shift-alt-1</kbd>: `editor:change-note-status-none`
  - <kbd>shift-alt-2</kbd>: `editor:change-note-status-active`
  - <kbd>shift-alt-3</kbd>: `editor:change-note-status-onhold`
  - <kbd>shift-alt-4</kbd>: `editor:change-note-status-completed`
  - <kbd>shift-alt-5</kbd>: `editor:change-note-status-dropped`

## v5.5.0
2022-03-11

### New features
* Global hotkey to create a new note in a separate window ([Learn more](https://docs.inkdrop.app/manual/customizing-keybindings#create-a-note-and-show-it-in-a-separate-window))
  - Added `application:quick-note` command

### Improvements
* Upgrade Electron from 12 to 16.0.10
  * Resolve [the GPU process error on Fefora 35 (Thanks Luis)](https://forum.inkdrop.app/t/bug-on-fedora-35-beta/2617)
* Set focus to the editor title input when a sub window shows up (Thanks [Otawara](https://forum.inkdrop.app/t/topic/2634))
* Button for clearing the search box (Thanks [Jimmy and David](https://forum.inkdrop.app/t/button-for-clearing-the-search-box/2674))
* [optional chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) syntax is supported with babel for plugins
* Support importing Markdown files by specifying folders

### Bugfixes
* Can't change sort order by commands (Thanks [Ryuki](https://forum.inkdrop.app/t/topic/2645))
* Window gets unintentionally resized when dragging if acrylic background enabled (Thanks [elpnt](https://forum.inkdrop.app/t/window-gets-unintentionally-resized-by-dragging-on-windows-11/2717))
* Move the 'full sync' menu to under the Help menu
* Multiline selection does not follow cursor upwards (Thanks [Magnus](https://forum.inkdrop.app/t/multiline-selection-does-not-follow-cursor-upwards/2846))
  - Bump up CodeMirror to 5.65.2
* Note search fails with specific characters (Thanks [Magnus](https://forum.inkdrop.app/t/note-search-fails-with-specific-characters/2816))
  - Searching for a note fails when using some characters like "%" and "&"
* Images are duplicated in the editor (Thanks [Lukas](https://forum.inkdrop.app/t/images-are-duplicated-in-the-editor/2845))

### Breaking changes
* A syntax highlighting for GraphQL has been moved to a plugin: [lang-graphql](https://my.inkdrop.app/plugins/lang-graphql)
* `require('electron').remote` is no longer available for plugins. Use `require('@electron/remote')` instead. [Learn more](https://github.com/electron/remote)

## v5.4.3
2021-10-01

## Bugfix

* Can't login or sync (Thanks [guys](https://forum.inkdrop.app/t/lets-encrypt-root-certificate-expiration-error/2609))
  * This is due to the let’s Encrypt root certificate expiration
* **NOTE**: Auto update must be not working due to the issue above. Please manually [download the latest version here](https://my.inkdrop.app/download)

## v5.4.2
2021-09-20

## Bugfixes

* Incorrect IME composition window (Thanks [Otawara](https://forum.inkdrop.app/t/ime/2582))
* The editor scrollbar `z-index` is higher than the editor drawer (Thanks [Otawara](https://forum.inkdrop.app/t/topic/2588))

## Improvement

* Update notification has been moved from a separate window to the bottom of the sidebar in order not to be distractive

## v5.4.1
2021-09-06

## Bugfixes

* Images with URL-encoded paths can't be imported from local files (Thanks [Nils](https://forum.inkdrop.app/t/importing-markdown-files-with-images-from-bear-not-working/2575))
* Line numbers are broken (Thanks [Marconi, Tawara, and Ovct](https://forum.inkdrop.app/t/5-4-0-line-numbers-are-broken/2571))
* Secondary windows stil have the default title bar on Windows (Thanks [Jon](https://forum.inkdrop.app/t/windows-ui-inconsistency-in-5-4/2572))

## v5.4.0
2021-09-02

## Design updates for Windows and Linux!

The default white title bar on Windows messes up the app clean design, especially with dark themes.
In this release, you've got the new custom title bar with a frameless window. Please take a look at this:

![Custom title bar on Windows](https://github.com/inkdropapp/version-history/blob/master/images/v5.4.0-default-dark.png?raw=true)

By getting rid of the white strip bar, we can now have the acrylic translucent background on Windows, which looks stunning:

![Vibrant dark UI demo](https://github.com/inkdropapp/version-history/blob/master/images/v5.4.0-vibrant-dark.png?raw=true)

Try installing [vibrant-dark-ui theme](https://my.inkdrop.app/plugins/vibrant-dark-ui).

## New feature

* Tab size option (Thanks [Avis](https://forum.inkdrop.app/t/processing-pasted-tabs/2521))

## Improvement

* Code-sign the Windows installer

## A bunch of bugfixes

* Scroll past end should stop at the last line (Thanks [Nicole](https://forum.inkdrop.app/t/scrolling-past-the-end-of-a-note/2538))
* The app crashes on quitting on Windows 8 (Thanks [Dmitriy](https://forum.inkdrop.app/t/inkdrop-crashes-on-quit-on-windows-8-1/2543))
* Empty task list should have a height (Thanks [Magnus](https://forum.inkdrop.app/t/checkboxes-collide-with-following-line-in-preview/2541))

## v5.3.1
2021-06-11

## Now it works on Apple Silicon (M1 chip)🎉

It significantly improves the app performance on M1 Macs.
Please download [the ARM64 build](https://my.inkdrop.app/download).

Watch how fast it is on YouTube 👀

[![Apple Silicon Support](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.1-apple_silicon_support.jpg?raw=true)](https://www.youtube.com/watch?v=WMi5n3EMSIw)

## A bunch of bugfixes

* The app randomly hangs for a while when using Google Japanese Input on macOS (Thanks [Manabu](https://forum.inkdrop.app/t/topic/71/13))
* Prevent inserting huge size images via API
* Window title not updated properly when editing a note (Thanks [Phil](https://forum.inkdrop.app/t/note-title-in-taskbar-is-undefined/2481))
* Prevent invoking arbitrary system calls via `iframe`
* Remove `webview` immediately after finishing printing or exporting (Thanks [Nicole and Shimizu](https://forum.inkdrop.app/t/window-becomes-messed-up-when-exporting-to-pdf/2462))
* The arrow buttons on sidebar shrink unexpectedly (Thanks [Magnus](https://forum.inkdrop.app/t/notebooks-different-fold-unfold-arrow-size/2479))

## v5.3.0
2021-05-03

You've got big updates that would significantly improve your workflow 💪

### Local REST API endpoint
It allows other programs to access your data in your computer via a simple HTTP API. Why is it awesome? See below..

* [See the documentation for more detail](https://docs.inkdrop.app/manual/accessing-the-local-database/#accessing-via-http-advanced)

### Alfred integration for searching notes quickly
![Alfref integration](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.0-integrating-with-alfred_screenshot.png?raw=true)

With the local REST API endpoint enabled, it gives a lot of possibilities to integrate Inkdrop with the existing productivity tools like Alfred!
[Alfred](https://www.alfredapp.com/) is the powerful alternative to Spotlight on macOS. By integrating Inkdrop and Alfred, you can instantly search your notes from Alfred.

* [See the documentation for more detail](https://docs.inkdrop.app/manual/integrating-with-alfred)

### Browser integrations for clipping web pages in Markdown
![Web clipper](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.0-web-clipper.png?raw=true)

Another benefit of having the local REST endpoint is the web clipper.
It lets you save any web page off the internet to your Inkdrop database in Markdown so you can read or edit it later, while synchronizing it securely via the end-to-end encryption.
The browser extensions are available for Google Chrome and Mozilla Firefox!

* [See the documentation for more detail](https://docs.inkdrop.app/manual/clipping-web-pages-from-browser)

### Better note conflict resolution
![Conflicted note](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.0-conflict-resolver.png?raw=true)

Inkdrop sometimes automatically resolves note conflicts but it could cause unwanted results in some cases.
In this update, it provides a dedicated UI for resolving the note conflicts.
You can view conflicted revisions in a separate window respectively to manually resolve the conflicts, which would prevent losing your edits.
It will be also supported in the mobile version.

### Other New features
* Show editing note title in title bar
  ![Title bar](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.0_title.png?raw=true)
* Dock menu for opening new window (Thanks [Yusuke](https://forum.inkdrop.app/t/macos-dock-inkdrop/2328))  
  ![Dock menu](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.0_dock-menu.png?raw=true)

### Improvements
* Show "Offline" when unreachable to the Inkdrop server (Thanks [zed](https://forum.inkdrop.app/t/silent-sync-failure-behind-corporate-proxy-data-loss-scenario/2206) and [Jon](https://forum.inkdrop.app/t/https-key-pinning-issues-causes-silent-sync-failure/2417))
  ![Offline status](https://github.com/inkdropapp/version-history/blob/master/images/v5.3.0-offline.png?raw=true)
* Upgrade Electron from 7 to 12
* API: add `editor-floating-actions` layout that allows you to add custom floating action buttons on the editor ([See the doc](https://beta.docs.inkdrop.app/reference/state-layouts#editor-floating-actions)) (Thanks Ron)
* Scroll sidebar to the selection automatically when opened a notebook (Thanks [Shogo](https://forum.inkdrop.app/t/open-notebook/2365))
* Network diagnosis to help configure Inkdrop for running it behind corporate proxy from menu *Help -> Run Network Diagnosis*.
* Set window background to dark on dark mode to avoid flashy white backgrounds (Thanks [Hugh](https://forum.inkdrop.app/t/incomplete-darkmode-white-background-when-opening-new-windows/2371))
* View an old revision in a separate window
* Support Elixir language (Thanks Clish54)
* Better HTML -> Markdown converter. It can now detect languages in code blocks in HTML.

### Bugfixes
* Prevent adding more than one tags with the same name (Thanks [Avis](https://forum.inkdrop.app/t/multiple-identical-tags/2314/2))
* Change folder structure and file name of backup files that avoid using `:` character, which is prohibited in some cloud storage services (Thanks [Ryan, Nicole, and Evan](https://forum.inkdrop.app/t/is-not-supported-in-onedrive-amazon-drive-or-sync-com/2265))
* Disable horizontal scrollbars for printing with other syntax themes (Thanks [Gogdizzy](https://forum.inkdrop.app/t/horizontal-overflow-not-disabled-when-printing-with-a-third-party-preview-theme/2408))
* Remove navigation keymaps like <kbd>cmd-k right</kbd> on macOS and <kbd>ctrl-k right</kbd> on Windows and Linux (Thanks [Shunichi](https://forum.inkdrop.app/t/how-can-i-disable-multi-keystroke-keybindings-completely/2390))

## v5.2.1
2021-01-14

Happy new year! 🙌

### Improvement
* New app icon for macOS Big Sur 💅

### Bugfixes
* Pasting an image from clipboard does not replace the selection (Thanks [avis](https://forum.inkdrop.app/t/cannot-overwrite-with-paste/2262))
* App sometimes won't load when the main window was out of screen in the previous session (Thanks [Ryan](https://forum.inkdrop.app/t/error-could-not-call-remote-method-setposition-check-that-the-method-signature-is-correct/2250))
* Cannot import Markdown files which don't have YAML frontmatters (Thanks [Ryan](https://forum.inkdrop.app/t/failed-to-import-markdown/2266))
* Extract repo URL from SSH URI properly on plugin pages (Thanks Ryan)
* `Ct


* * *

The release notes for older versions can be found [here](https://github.com/inkdropapp/version-history/blob/master/README-old.md)

