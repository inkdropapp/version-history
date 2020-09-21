# Inkdrop Release Notes

## v5.1.0
2020-09-21

### It remembers your work! 🤯
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

