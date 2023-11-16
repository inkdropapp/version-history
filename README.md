# Inkdrop Release Notes

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

