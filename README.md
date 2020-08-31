# Inkdrop Release Notes

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

