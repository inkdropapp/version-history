# Inkdrop Release Notes

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
* `Ctrl-LClick` for multiple cursors is not working on Windows or Linux (Thanks [Nicolo](https://forum.inkdrop.app/t/keyboard-shortcuts-for-multiple-cursors-on-windows/2253))

## v5.2.0
2020-12-21

Hello! Check out my vlog for this update :)  
[![vlog](https://github.com/inkdropapp/version-history-beta/blob/master/images/v5.2.0-vlog.jpg?raw=true)](https://www.youtube.com/watch?v=zlrQScqhM90)

### Search feature improvements
* `title:` and `body:` search qualifier to filter notes by title or body (Thanks [Zhuolun](https://forum.inkdrop.app/t/how-to-search-notes-by-the-title/1849))
  ![title qualifier](https://github.com/inkdropapp/version-history-beta/blob/master/images/v5.2.0-title-qualifier.png?raw=true)
* Support changing order of search results (Thanks [Micah_Ledbetter](https://forum.inkdrop.app/t/search-results-are-not-sortable/2181))
  ![Search result order](https://github.com/inkdropapp/version-history-beta/blob/master/images/v5.2.0-search-result-order.png?raw=true)

### Importing & exporting feature improvements
* Support importing images when importing from Markdown or HTML files
* Support YAML frontmatter for Markdown export (Thanks [Robert](https://github.com/inkdropapp/inkdrop-export-utils/pull/3))

### Workflow improvements
* Support adding tags and status by drag-and-drop notes (Thanks [Jan](https://forum.inkdrop.app/t/feedback-working-with-tags/2225))  
  ![DnD support](https://github.com/inkdropapp/version-history-beta/blob/master/images/v5.2.0-dnd-support.gif?raw=true)
* Add "Remove Tag" context menu on note tag bar (Thanks [Jan](https://forum.inkdrop.app/t/feedback-working-with-tags/2225))
* Support `inkdrop://` URL scheme on Windows (Thanks [Otawara-san](https://forum.inkdrop.app/t/windows-url/2232))
  * Now the URL scheme works across macOS, Linux and Windows 🎉
* Add some animations 🏃  
  ![DnD support](https://github.com/inkdropapp/version-history-beta/blob/master/images/v5.2.0-animations.gif?raw=true)

### Bugfixes
* Allow smaller window size when distraction free mode (Thanks [Shota-san](https://forum.inkdrop.app/t/topic/2215))
* Move a window into the primary screen if it was outside of screens (Thanks [Alexander](https://forum.inkdrop.app/t/windows-10-app-window-opens-outside-of-screen/869))
* Fix word-break of shared page url on note sharing dialog
* Hide workspace if notebook does not exist when restoring navigation state (Thanks [T_Crain](https://forum.inkdrop.app/t/notes-and-notebooks-not-syncing-on-mac/2214))
* Fix placeholder bug in codemirror (Thanks [Akira-san](https://forum.inkdrop.app/t/just-start-typing-is-shown-when-deleting-unfixed-text-by-back-space-key/2221/6))
* Exporting a note that includes `$'` causes an unexpected output when exporting as HTML or PDF (Thanks [Saito-san](https://forum.inkdrop.app/t/problem-to-export-pdf/2243))
* BREAKING CHANGE: `inkdrop://note:***` URIs are no longer working on macOS Big Sur. Please replace them with `inkdrop://note/***`.

## v5.1.2
2020-11-02

Helloooo

### Improvements
* Add 'Insert Image' toolbar button
* Improve launch speed a little bit
* Add "Open Link" context menu for URLs in editor
* Add "Copy Link Address" context menu for URLs in editor
  ![URL context menu](https://github.com/inkdropapp/version-history/blob/master/images/v5.1.2-url-context-menu.png?raw=true)
* Show keyboard shortcuts for changing note status
  ![URL context menu](https://github.com/inkdropapp/version-history/blob/master/images/v5.1.2-note-status-shortcuts.png?raw=true)

### Bugfixes
* Clear up search query when restoring 'All Notes' state
* Empty areas appear when exporting as PDF (Thanks [Dscat](https://forum.inkdrop.app/t/topic/2120))
* Force breaking all characters for long URLs in editor (Thanks [Jon](https://forum.inkdrop.app/t/multi-link-link-formatting/2100))
* Incorrect YAML frontmatter detections (Thanks [Dscat](https://forum.inkdrop.app/t/pdf/2121))
* Wrong title for imported md file with YAML frontmatter (Thanks [Federico](https://forum.inkdrop.app/t/wrong-title-for-imported-md-file-with-yaml-front-matter/2124))
* Can't export when note list is hidden (Thanks [Dscat](https://forum.inkdrop.app/t/note-export-as-pdf/2127/3))
* Hide pin header when searching with keyword
* Some images are not shown in plugin readmes
* Adding new notebooks with the sidebar has a non trivial hierarchy (Thanks [Athul](https://forum.inkdrop.app/t/adding-new-notebooks-with-the-sidebar-has-a-non-trivial-hierarchy/2187))

## v5.1.1
2020-09-24

g'day. Automn is coming! 🍁

### Faster restoration of navigation state
Quicker to resume your work!

### Add 'Insert image' toolbar button
I don't remember why I didn't add it before, haha.  
![Open link context menu](https://github.com/inkdropapp/version-history/blob/master/images/v5.1.1_insert-image.png?raw=true)

### Good news for vimmers: 'Open Link' context menu for URL tokens in the editor
When you use it with vim plugin, double-clicking to open a link does not work as the event is handled by the plugin.
Allowing to open a link from the context menu would solve such issue.
Also we got 'Copy Link Address' menu as well.  
![Open link context menu](https://github.com/inkdropapp/version-history/blob/master/images/v5.1.1_open-link-context-menu.png?raw=true)

### Bugfixes
* Export a note as pdf not working (Thanks [Suzuki-san](https://forum.inkdrop.app/t/file-export-as-pdf/2089))
* Search query not cleared when restoring 'all notes' navigation state

## v5.1.0
2020-09-21

### It remembers your work state! 🤯
Now it supports restoring the last navigation state on launching.
It means that Inkdrop remembers which note you were editing, and sidebar and note list state, including search keywords.
So, you can quickly resume your work even if you fell asleep in the middle of work :)

### Better note exportability
When you wrote up a note, it should be able to be exported quickly. This update improves the note exportability so that you can work with other apps faster.

* Support "Copy as HTML" and "Copy as Simple HTML" context menu to note list (Thanks [Joey](https://forum.inkdrop.app/t/can-you-add-copy-as-html-function/2083))  
  <img src="https://github.com/inkdropapp/version-history/blob/master/images/v5.1.0_copy-as-html.png?raw=true" style="width: 300px" />
* Support exporting a notebook as Markdown or HTML from sidebar context menu  
  <img src="https://github.com/inkdropapp/version-history/blob/master/images/v5.1.0_export-notebook.png?raw=true" style="width: 300px" />
* Support exporting multiple selected notes as Markdown (Thanks [Marco](https://forum.inkdrop.app/t/export-selected-notes-as-markdown/253/5?u=craftzdog))
* Support batch export as pdf format
* Support copying note with images as HTML from preview pane (Thanks [Mike](https://forum.inkdrop.app/t/copy-image-from-inkdrop-paste-into-another-app/1845))  
  VIDEO🎬: [devlog: Fixing a bug of my Electron-based React app!](https://www.youtube.com/watch?v=jizO0wnKjIg)

### Other improvements
* Set status and tag based on current query context (Thanks [Shogo-san](https://forum.inkdrop.app/t/topic/2060))
  * When you are selecting a tag or status, new note will have the tag/status automatically.
* Remember workspace view state in navigation history
* Defer showing app update notification when the app is in background (Thanks [Luís, Parker, Al, and Timo](https://forum.inkdrop.app/t/how-can-i-disable-the-update-popup/388))
  * It shows when the window is focused

### Bugfix
* Pinned notes not listed at the top in tag and status groups (Thanks [Shimizu-san](https://forum.inkdrop.app/t/pin-to-top-not-working-with-tags-and-statuses/2078))

## v5.0.1
2020-09-09

### New feature
* Add "Open notebook" context menu to notebook picker on editor (Thanks [Yamashita-san](https://forum.inkdrop.app/t/topic/2060))  
  ![open notebook menu](https://github.com/inkdropapp/version-history/blob/master/images/v5.0.1_open-notebook-context-menu.png?raw=true)

### Improvement
* Add a command 'core:note-list-show-notes-in-book-of-editing-note'

### Bugfix
* HTTPS web proxy not working in some environments (Thanks [Shimizu-san](https://forum.inkdrop.app/t/v5/2050/15))
* Blank search box shows no notes (Thanks [Dav](https://forum.inkdrop.app/t/version-5-very-buggy-on-ubuntu/2045))
* 'shift-ctrl-o' for toggling numbered list not working (Thanks [Peilun](https://forum.inkdrop.app/t/key-bind-ctrl-shift-o-not-working/2057))
* Parse YAML frontmatter only at the first line (Thanks [codeaporia](https://forum.inkdrop.app/t/thematic-breaks-issue/2059))
* source-map-support not working, causing 'Failed to render Markdown' error (Thanks [Jonathan, Brad, and Dav](https://forum.inkdrop.app/t/failed-to-render-markdown-after-import-from-markdown/2039))
* Some editor config values are not applied when changed (Thanks [Tahara-san](https://forum.inkdrop.app/t/topic/2036))
* 'core:navigate-back'/'core:navigate-forward' commands should be bound with <kbd>alt-left</kbd>/<kbd>alt-right</kbd> for the convention of Windows and Linux (Thanks [Otawara-san](https://forum.inkdrop.app/t/windows-navigate-forward-navigate-back-os/2031))

## v5.0.0
2020-09-01

[![Thumbnail](https://site-cdn.inkdrop.app/email/2020-08-29_whats-new-in-v5-thumbnail.png)](https://blog.inkdrop.info/introducing-inkdrop-v5-5dee5873f953)

You can take a glance at [the blogpost here](https://blog.inkdrop.info/introducing-inkdrop-v5-5dee5873f953) about this update!
Thank you, Andi, can_Y, ebigram, Erdem, Gustavo, James, Mike, Rael, tdudz, and Zhuolun for helping me test the beta versions.

### New features

* [Pin notes to top](https://forum.inkdrop.app/t/pin-notes-and-reminder/672) (Thanks Andi, Alec, Bastian and Adelbert)
* [Show sub-notebooks](https://forum.inkdrop.app/t/display-sub-notebooks-when-focussed-on-notebook/) in [notebook submenu](https://docs.inkdrop.app/manual/navigating-notes#notebook-submenu) (Thanks James and Jeremy)
* [Remember sort & order](https://forum.inkdrop.app/t/save-remember-sort-order-settings-per-notebook/315) of note list per view (all/notebook/tag/status/pins)
* Toggling statuses and tags sections in sidebar
* Support `editor:open-link` command which allows you to open a link on browser from the editor. The default keystroke is <kbd>shift-ctrl-o</kbd>
* Support Workspace View
* Includes sub-notes when notebook item is collapsed on sidebar
* Remember navigation state in navigation history
* Restore note list and editing state when exiting searching.  
  After exiting from searching by hitting <kbd>Esc</kbd> key or clearing keyword, you get back to the previous state of the note list and the editor.
* Filtering notebooks by keyword when moving a notebook
* Add MIME type `x-scheme-handler/inkdrop` for Linux so that you can open it with `inkdrop://` URI scheme (Thanks [Andi](https://forum.inkdrop.app/t/allow-inkdrop-scheme-handler-on-linux-ubuntu/1935))
* Toggle task list (`[ ]` or `[x]`) by mouse click in editor
* GUI for installing plugins

### Improvements

* Show accelerators (shortcut keys) in context menu  
* Default keyboard shortcut for pinning notes
  - <kbd>P</kbd> on note list
* Make `strong` & `em` text clearer in syntax themes
* Improve blockquote styling in syntax and preview themes
* Change the keystroke for `core:insert-link` to <kbd>cmd-k</kbd> or <kbd>ctrl-k</kbd>
* Select next note when deleting notes (Thanks [Mike](https://forum.inkdrop.app/t/focus-after-deleting/1842))
* Restore focus when closing a dialog
* Smaler font size for note title
* Better performance in rendering note list items
* The app launch speed significantly improved
* Refurbish the editor toolbar
* Refurbish icons
* Add a separator for grouping pinned notes (Thanks [tdudz](https://forum.inkdrop.app/t/v4-7-0-beta-testing/1834/23?u=craftzdog))
* Improve search result by having bigger weight for title field (Thanks [Zhuolun and James](https://forum.inkdrop.app/t/how-to-search-notes-by-the-title/1849))
* Show progress of updating local indices
* Show error dialog when failed to load the config files (Thanks [can_Y](https://forum.inkdrop.app/t/inkdrop-client-displays-blank-when-opened-on-macos/1954))
* Show more human-friendly error messages (Thanks [Samantha](https://forum.inkdrop.app/t/validation-error-should-be-displayed-as-human-friendly-message/1979))
* Include 'Completed' & 'Dropped' statuses when filtering with keywords
* Remove 'Search' sidebar menu
* Better conversion from HTML to Markdown
* Restart sync when system unlocked
* Restart sync when system resumed
    
### Bugfixes

* Plugin readme is not showing as expected
* Incorrect parent book Id is used when creating new notebook (Thanks [Gustavo](https://forum.inkdrop.app/t/v4-7-0-beta-1-beta-testing/1834/12?u=craftzdog))
* Prevent closing window on pressing <kbd>ctrl-w</kbd> on note title input bar on Windows and Linux
* Do not blur on pressing backspace with all text selected in tag input
* add `https://` if the URL is invalid format (Thanks [Rael](https://forum.inkdrop.app/t/app-hangs-when-click-partial-link/1955))
* fix incorrect English (Thanks Rael)
* Fallback to the default theme if not installed (Thanks [Mark](https://forum.inkdrop.app/t/crash-switching-from-custom-theme-development-to-installed-theme/1858))
* Exporting all notes as Markdown not working when exporting sub-notebooks (Thanks [Tiemen](https://forum.inkdrop.app/t/export-all-notes-functionality-errors-on-file-already-exist/1997))
* Create new notebook modal already has value from previously create notebook (Thanks [Martynas](https://forum.inkdrop.app/t/create-new-notebook-modal-already-has-value-from-previously-create-notebook/1984))
* Avoid loading 'null' mode in the editor
* Fix the issue where "Cannot read property 'toString' of undefined" occasionally happens on the note list (Thanks Gustavo and Rael)

* * *
The release notes for older versions can be found [here](https://github.com/inkdropapp/version-history/blob/master/README-old.md)

