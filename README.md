# Inkdrop Release Notes

## v4.0.0
2019-06-05

Please read [this blog post](https://blog.inkdrop.info/introducing-inkdrop-4-9d0c63de16d2) to take a quick look at this release!

* **New feature**: Support configuring global keymaps to focus the app window (Thanks [Gustavo](https://forum.inkdrop.app/t/hotkey-to-open-show-inkdrop/1262))
* **New feature**: Support inkdrop:// app scheme (macOS) and argv (Windows & Linux) to open a note from external apps
* **New feature**: Hide main window instead of closing it (Thanks [Gustavo](https://forum.inkdrop.app/t/app-takes-a-while-to-open-up-on-macos-after-cmd-w/822))
* **New feature**: Support inline image widgets for HTML img tags
* **New feature**: End-to-end encryption
* **New feature**: New search UI
* **New feature**: Notebook submenus
* **New feature**: Count badges
* **New feature**: Smart scroll sync for side-by-side mode
* **Improvement**: Support filtering by tag (Thanks Horii-san)
* **Improvement**: Remember sidebar visibility (Thanks Horii-san)
* **Improvement**: Add left margin to count badge (Thanks [leptospira489](https://forum.inkdrop.app/t/thinner-scrollbar-on-windows-and-linux))
* **Improvement**: New logo
* **Improvement**: Change scrollbar width and color for Windows and Linux (Thanks [leptospira489](https://forum.inkdrop.app/t/thinner-scrollbar-on-windows-and-linux))
* **Improvement**: Change sidebar indent width slightly (Thanks Enokiya-san)
* **Improvement**: `ipm` command uses the client API key for the desktop app instead of requiring to generate an API key
* **Improvement**: Improve sync to be more stable
* **Improvement**: Way smoother smart scroll sync
* **Improvement**: Quicker smart scroll sync
* **Improvement**: Better performance for full-text search
* **Improvement**: Support embedding attachment images with HTML tags (Thanks [Erdem](https://forum.inkdrop.app/t/images-in-html-tag/1096))
* **Bugfix**: JS compile cache not working
* **Bugfix**: SVG files cannot be inserted (Thanks [John](https://forum.inkdrop.app/t/cannot-insert-svg-images/1271))
* **Bugfix**: Plugin won't be loaded correctly due to babel error (Thanks [folks involved on this issue](https://github.com/libeanim/inkdrop-admonition/issues/1))
* **Bugfix**: `devMode` won't work (Thanks Otawara-san)
* **Bugfix**: The app crashes when the note list scrolls after resizing the window (Thanks Horii-san)
* **Bugfix**: Preferences window crashes when opened a plugin detail
* **Bugfix**: Parse invalid search queries without errors
* **Bugfix**: Clear find state in the editor when search keyword not set (Thanks [Erdem](https://forum.inkdrop.app/t/previous-search-history/1126/7?u=craftzdog))
* **Bugfix**: Notebook picker on the editor not working (Thanks Otawara-san)
* **Bugfix**: Cannot empty the trash (Thanks [Erdem](https://forum.inkdrop.app/t/cannot-empty-the-trash/1189))
* **Bugfix**: Show a proper error message on incompatible plugins
* **Bugfix**: `ctrl-y` to redo in the editor not working on Windows and Linux (Thanks Otawara-san)
* **Bugfix**: Dbl-clicking urls to open on the editor not working (Thanks Otawara-san)
* **Bugfix**: Props for HTML `img` tag like `width` not working (Thanks [Kazutaka-san](https://forum.inkdrop.app/t/resizing-images-by-using-html-tag/1167/))
* **Bugfix**: Search keyword not being highlighted until you open a different note (Thanks [Erdem](https://forum.inkdrop.app/t/previous-search-history/1126/3))
* **Bugfix**: Can't toggle task list on preview
* **Bugfix**: Smart scroll sync is unstable (Thanks Otawara-san)
* **Bugfix**: Previous search text highlighting won't be cleared on the editor (Thanks [Erdem](https://forum.inkdrop.app/t/previous-search-history/1126))
* **Bugfix**: Backspace won't work on tags input bar (Thanks [FORTRAN](https://forum.inkdrop.app/t/tag-removal-not-working/1134))
* **Bugfix**: Can't remove notebooks and tags from sidebar
* **Bugfix**: Exported PDF randomly skips inline image (Thanks [Asish](https://forum.inkdrop.app/t/exported-pdf-randomly-skips-inline-images/1070))
* **Bugfix**: First bullet point has an additional newline (Thanks [derkork](https://forum.inkdrop.app/t/first-bullet-point-has-an-additional-newline/1068) and Kuroyanagi-san)

## v3.25.4
2019-03-05

* **Improvement**: Update Electron to 3.1.4
* **Bugfix**: Avoid SSL problem with proxy enabled (Thanks Takahiro-san and Yan)
* **Bugfix**: Windows app randomly not shutting down correctly (Thanks Sceptic, Samantha, and Otawara-san)
* **Bugfix**: Prevent from removing selection out of search input when note opened (Thanks Yoshioka-san)

## v3.25.3
2019-01-21

* **New Feature**: Add a context-menu for copying and saving image on Markdown preview (Thanks kyubuns-san and Otawara-san)
* **Improvement**: Support disabling the validation of self-signed certs by adding `strict_ssl: 0` in your `config.cson` like so:
  ```
  "*":
    core:
      network:
        strict_ssl: 0
  ```
* **Bugfix**: Proxy settings won't work properly (Thanks Nobumi-san)
* **Bugfix**: Exporting PDF file does not work (Thanks Atsuo-san)

## v3.25.2
2019-01-12

* **Bugfix**: Fix a bug where the app fails to initialize database
  * It avoids happening the error: "Failed to load database: TypeError [ERR_INVALID_CALLBACK]: Callback must be a function"

## v3.25.1
2019-01-11

* **Bugfix**: The app incorrectly checks the beta version

## v3.25.0
2019-01-11

* **New feature**: Support jump-to-line in editor (Thanks Otawara-san)
* **Improvement**: Update electron@3
* **Improvement**: Fix menu item rendering problem on Ubuntu (Thanks [andi](https://forum.inkdrop.app/t/menu-item-rendering-problem-on-ubuntu-18-04/556/))
* **Improvement**: Fix vibrant dark UI theme issue (Thanks [Caleb](https://forum.inkdrop.app/t/vibrant-dark-ui-rendering-issue/187))
* **Chore**: Prepare for beta program

## v3.24.0
2018-12-25

* **Improvement**: Add some CSS for print-out (Thanks Ikeda-san)
* **Improvement**: Use Segoe UI font for Windows
* **Bugfix**: Limit batch size of replications (Thanks Shimba-san)

## v3.23.2
2018-11-28

* **Improvement**: Auto-save when blurred the active window
* **Bugfix**: Markdown parser doesn't behave correctly and it causes some plugins like TOC won't work
* **Bugfix**: Table align doesn't work

## v3.23.1
2018-11-09

* **Bugfix**: Cursor jumps backward after typing the first letter (Thanks artigas and Lauren)

## v3.23.0
2018-11-09

* **Improvement**: Clear text selections in preview on note open (Thanks Otawara-san)
* **Improvement**: Show confirm dialog for restoring backup (Thanks Nojiri-san)
* **Improvement**: Add editor commands for changing note status (Thanks Hiroga-san)
  * `editor:change-note-status-none`
  * `editor:change-note-status-active`
  * `editor:change-note-status-onhold`
  * `editor:change-note-status-completed`
  * `editor:change-note-status-dropped`
* **Improvement**: Disable auto-save while composing CJK (Thanks Obi-san and Otawara-san)
* **Improvement**: Preserve cursor positions when synced editing note
* **Bugfix**: Image widgets unloaded when note updated via sync
* **Bugfix**: Inline HTML breaks the app (Thanks David M., David A., T.Y, et al.)

## v3.22.4
2018-10-15

* **Improvement**: (Windows) Avoid duplicate save action for the same revision
* **Bugfix**: Small bugfixes on internal processing

## v3.22.3
2018-10-09

* **Improvement**: Change timeout for auto-save from 1 min to 5 secs.

## v3.22.2
2018-09-30

* **Bugfix**: (Windows) Can't toggle checkboxes on preview (Thanks, Enokiya-san)
* **Bugfix**: (Windows) Inline HTML does not work (Thanks, Kato-san)
* **Bugfix**: Table align does not work (Thanks, [ZeroThe2nd](https://forum.inkdrop.info/t/table-in-the-shared-note-does-not-respect-cell-alignments/138/5))

## v3.22.1
2018-09-21

* **Bugfix**: Unexpected note conflicts happen randomly (Thanks [Parker, Hoopy, Meo-san and Otawara-san](https://forum.inkdrop.info/t/conflicted-notes/651))
* **Bugfix**: Cursor position randomly moves to the note head while typing fast (Thanks [Otawara-san](https://forum.inkdrop.info/t/topic/673))

## v3.22.0
2018-08-25

* **New feature**: Remember window maximized and fullscreen state
* **New feature**: Support inline HTML
* **New feature**: Support restoring old note revisions (Thanks Hoopy and others)
* **Improvement**: Avoid overwriting old rev with new rev when conflicted. Make a copy of the old version
* **Bugfix**: Fix unexpectedly rendering preview endlessly

## v3.21.0
2018-08-13

* **New feature**: Task progress view
* **Bugfix**: The default remote db url is incorrectly shown

## v3.20.2
2018-07-21

* **bugfix**: Version dialog not shown on Windows or Linux (Thanks Sceptic)
* **bugfix**: The app won't quit immediately in some case (Thanks Sceptic)
* **bugfix**: Plugin keybindings not shown correctly on the preference screen (Thanks [Samantha](https://forum.inkdrop.info/t/enable-codefold/407/24))
* **bugfix**: Prohibit deleting default notebook (Thanks Sceptic)
* **bugfix**: Avoid overwriting notes with same title and date time when exporting (Thanks Sceptic)
* **bugfix**: Hide editor search box when toggling preview (Thanks [Vianney](https://forum.inkdrop.info/t/search-tool-breaks-the-notes-header/473))
* **bugfix**: Allow file:// protocol for images (Thanks [Sceptic](https://forum.inkdrop.info/t/pdf-links-break-the-window-its-openend-in/593/2))

## v3.20.1
2018-04-15

* **improvement**: Change the label for removing note from 'Delete' to 'Move to Trash' (Thanks [Dan](https://forum.inkdrop.info/t/add-a-confirmation-prompt-when-deleting-notes/457))
* **improvement**: Exporting with preview theme styling (Thanks [audiosyncrasy](https://forum.inkdrop.info/t/pdf-export-with-preview-theme-styling/489))
* **improvement**: Allow rendering `<mark>` tag (Thanks [Hoopy](https://forum.inkdrop.info/t/plugin-dev-extending-markdown-syntax/427))

## v3.20.0
2018-04-03

* **bugfix**: Fixed a problem where the sync requests always time out after 10 seconds. It sometimes causes to fail synchronization when you have a lot of notes and images to sync at once (Thanks [Hoopy](https://forum.inkdrop.info/t/recommended-setup-for-own-sync-server/374/13))
* **bugfix**: Use 20 characters for indexing notes with title (Thanks chocolat)
* **bugfix**: Handle `mailto:` links properly (Thanks [Samantha](https://forum.inkdrop.info/t/how-to-make-mailto-links-work/409))
* **improvement**: Add logout and sync menu (Thanks [Al and Bob](https://forum.inkdrop.info/t/how-to-logout-switch-accounts/401/3))
* **improvement**: Stop checking update once it found new version on Linux (Thanks [Luis, Parker and Al](https://forum.inkdrop.info/t/how-can-i-disable-the-update-popup/388/4))
* **improvement**: Select all text on focus on the search bar (Thanks [Jesse and Robert](https://forum.inkdrop.info/t/feature-refinement-remove-search-context-from-ui-for-regular-searches-use-tagname-for-tag-filters/357))

## v3.19.0
2018-03-22

* **improvement**: Add print shortcut for windows and linux (Thanks Otawara-san)
* **improvement**: Show native traffic light window buttons on macOS (Thanks [Dan](https://forum.inkdrop.info/t/macos-traffic-light-window-buttons-dont-behave-as-expected/340))
* **improvement**: Better keychain error message
* **improvement**: New config for sync: `core.db.sync.options` (Thanks [Hoopy](https://forum.inkdrop.info/t/recommended-setup-for-own-sync-server/375))
* **bugfix**: Ignore case for title sort (Thanks [Florian](https://forum.inkdrop.info/t/inkdrop-should-ignore-case-when-ordering-note-lists-by-title/385))

## v3.18.0
2018-02-01

* **New feature**: Exporting individual notes (Thanks, [Takeuchi-san](https://forum.inkdrop.info/t/export-selected-notes-as-markdown/253))
* **Improvement**: Support changing sort mode via commands:
  - `view:sort-by-title`
  - `view:sort-by-date-created`
  - `view:sort-by-date-updated`
  - `view:sort-in-ascending`
  - `view:sort-in-descending`
* **Improvement**: Don't save the window state if it's fullscreen/maximized (Thanks, [Otawara-san](https://forum.inkdrop.info/t/windows/287))
* **Bugfix**: Syntax highlighting for PHP won't work (Thanks, [Nick](https://forum.inkdrop.info/t/php-highlighting-doesn-t-work-is-it-only-me-or/301) and [Kagaya-san](https://forum.inkdrop.info/t/php/266))
* **Bugfix**: Avoid duplicate keybinding for cmd-u & ctrl-u (Thanks, [Otawara-san](https://forum.inkdrop.info/t/ctrl-u/283/4))

## v3.17.4

* **Bugfix**: It always fails to initialize `solarized-light-syntax` plugin
* **Improvement**: A little bit faster app initialization

## v3.17.3

* **Bugfix**: Toggling task-list isn't working
* **Improvement**: Drop paste-as-markdown support. Use [paste-as-markdown plugin](https://app.inkdrop.info/plugins/paste-as-markdown) instead.
* **Improvement**: Drop support for auto-incrementing list numbers when typed return key. Use [autoupdate-list-numbers plugin](https://app.inkdrop.info/plugins/autoupdate-list-numbers) instead.
* **Improvement**: Better conversion from HTML to Markdown
* [Learn more](https://community.inkdrop.info/note/d975606d93c067c5ef8d6adfb5db83b5/note:HylTjpE9zz)

## v3.17.2

* **Bugfix**: The account status won't be recognized correctly when it is not active (e.g., trial expired)

## v3.17.1

* **Improvement**: Show helpful guide on the login failures
* **Bugfix**: "Add Notebook" button on the side bar doesn't work (Thanks, Nitawaki-san)

## v3.17.0

* **New feature**: Showing invisible characters (Thanks, Kato-san)
* **Improvement**: Open up the download page when new version available but not using auto update (Thanks, [Aleksandar](https://forum.inkdrop.info/t/recognize-the-proper-installation-method-when-offering-an-update-link))
* **Improvement**: Start syncing automatically when network is back online
* **Improvement**: Show detailed error message when failed logging in
* **Improvement**: Cursor moves to the next placeholder when executed `Insert Link` while selecting text (Thanks, Nitawaki-san)
* **Bugfix**: Auto-increment for numbered lists corrupts mixed-type list (Thanks, Nitawaki-san)

## v3.16.0

* **Bugfix**: Continue-list works unexpectedly when starting lines with "\*" character (Thanks [Aleksandar](https://forum.inkdrop.info/t/markdown-autocompletion-bug-when-starting-lines-with-character))
* **Bugfix**: Paste-HTML-as-Markdown feature won't work well when you copy text from PhpStorm (Thanks [Luis and Iwan](https://forum.inkdrop.info/t/bug-paste-from-intellj-maybe-more-apps-inserts-plain-text-html/76/8?u=craftzdog))
* **Improvement**: Support auto-increment remaining bullet numbers of ordered lists

## v3.15.0

* **New feature**: Scroll-past-end (Thanks, [Andrew](https://forum.inkdrop.info/t/scroll-past-end/169))
* **Improvement**: It now works on Ubuntu 14.04 and Debian 8.x (Thanks, [Thomas](https://forum.inkdrop.info/t/installing-inkdrop-on-ubuntu-14-04/182))
* **Improvement**: Don't continue-list in code blocks (Thanks, Matsumoto-san)
* **Improvement**: Support jumping cursor to matched brackets in vim mode (Thanks, [kiryph](https://github.com/inkdropapp/inkdrop-vim/issues/1))
* **Improvement**: Support searching notes without any status by specifying `status:none` (Thanks, Nitawaki-san)
* **Improvement**: Support inserting multiple image files at once (Thanks, kyokomi-san)

## v3.14.2

Sorry for the frequent update. It's due to the recent change for reducing the app size. Thanks for your report!

* **Bugfix**: `ipm` command not working

## v3.14.1

* **Bugfix**: It fails to load plugins on macOS (Thanks Iwasaki-san)

## v3.14.0

* **Improvement**: Reduced app size
* **Improvement**: Support moving selected text by drag-and-drop (Thanks Ben)
* **Improvement**: Support importing HTML file with tags, last updated date and created date (Thanks Nishi-san)
* **Bugfix**: Hide menu bar on update window (Thanks Aleksandar)

## v3.13.0

* **Improvement**: Less blocking UI while indexing full-text search

## v3.12.0

* **New feature**: Export as PDF (Thanks Oliver)
* **New feature**: Print out
* **Improvement**: Support exporting as HTML for extended Markdowns by plugins such as `math` and `sequence-diagrams` (Thanks Iwan)
* **Improvement**: Consistent syntax highlighting on the preview
* **Improvement**: Now ships RPM package
* **Bug fix**: Line height preference won't work (Thanks Kato-san)
* **Bug fix**: Development mode can't be enabled (Thanks Iwan)

## v3.11.0

* **New feature**: Support vim keybindings by plugin: https://app.inkdrop.info/plugins/vim
* **New feature**: Support spell checker by plugin: https://app.inkdrop.info/plugins/spell-checker
* **Improvement**: Don't continue list when cursor is before bullet
* **Bugfix**: Nested task list is corrupt
* **Bugfix**: Support opening local file and ftp protocol links (Thanks [moritz](https://forum.inkdrop.info/t/links-in-preview/91/2))

## v3.10.6

* **Improvement**: Ordered task list (Thanks [Pina](https://forum.inkdrop.info/t/bug-ordered-list-checkbox-cannot-be-checked/83))
* **Improvement**: Focus existing window and quit when launching duplicate instances (Thanks Machida-san)

## v3.10.5

* **Bugfix**: Tagging is not working due to the recent performance improvement

## v3.10.4

* **Bugfix**: Paste from IntellJ(maybe more apps) inserts plain text html (Thanks Jeremy)
* **Bugfix**: Authentication issue

## v3.10.3

* **Improvement**: Fix Markdown preview theme for dark UIs to look better
* **Improvement**: Code optimizations
* **Improvement**: Add 'Paste as Plain Text' menu to the editor's context menu (Thanks Oliver)
* **Improvement**: Allow GIF files as attachments
* **Bugfix**: Fix app freezing for several seconds when using Google IME with suggest feature (Thanks kyokomi-san)

## v3.10.2

* **Bug fix**: Pasting text won't replace current selection (Thanks Obi-san & @marie_9801)

## v3.10.1

* **Improvement**: Support `paste as plain text` with Cmd-Alt-Shift-V or Ctrl-Alt-Shift-V.
* **Bug fix**: Won't scroll to the cursor position when pasted large text

## v3.10.0

* **New feature**: Paste HTML data as Markdown from clipboard
* **Improvement**: Support GFM for HTML file import
* **Bug fix**: Selecting multiple files on the HTML import dialog won't work (Thanks Makubi-san)

## v3.9.0

* **New feature**: Import HTML

## v3.8.0

* **New feature**: Sharing Notes on the Web
* **Bug fix**: Refusing logging in wih newly retaken account (Thanks André)
* **Bug fix**: Alert once about the trial expiration after purchased license (Thanks Yasunaka-san)
* **Bug fix**: Syntax highlighting doesn't work with same name on the preview and the editor for some languages (Thanks Timothy)

## v3.7.3

* **Improvement**: GraphQL syntax highlighting support (Thanks Tim)
* **Bugfix**: Showing "&nbsp" in Preferences panel (Thanks Xing)
* **Bugfix**: New note unexpectedly inherits previous note's content (Thanks Obi-san)

## v3.7.2

* **Bugfix**: Prevent clearing search keywords of in-note-search on `editor:find` (Thanks Ishida-san)
* **Bugfix**: App crashes without any message dialog when failed to observe the config file (Thanks Parker)

## v3.7.1

* **Improvement**: Make `editor:find*` and `editor:replace` commands global (Thanks Ishida-san)
* **Improvement**: Pressing return key at the search bar to focus on the editor
* **Bugfix**: Editor unexpectedly scrolls when there's an inline image widget (Thanks 諸岡さん)

## v3.7.0

* **New feature**: Inline image widgets in the editor (Thanks Tyler)
* **Bugfix**: Closing search box with esc on mac closes the full screen mode (Thanks Maciej)
* **Bugfix**: Syntax highlighting for Powershell doesn't work (Thanks @whyallthenoise)
* **Bugfix**: Gutter's background color won't be transparent when UI theme is `vibrant-dark-ui`.

## v3.6.1

* **Bugfix**: Editor ignores changes made by other device (Thanks Luís)

## v3.6.0

* **Improvement**: New internal API endpoint
* **Bugfix**: Better context menu behaviors (Thanks Stephen)
* **Bugfix**: Some UI themes break login screen

## v3.5.0

* **New feature**: Duplicating Note (Thanks Geoff)
* **New feature**: New Theme (Vibrancy Dark) for macOS
* **New feature**: Copying Link Address in Note Preview (Thanks Vianney)
* **New feature**: Support Highlighting Several Languages in Note Preview with highlight.js@9.12.0
* **New feature**: Opening Link from Editor by Double-clicking URL
* **Improvement**: Update Electron@1.6.7

## v3.4.2

* **Bugfix**: Checkbox stays on the absolute position in HTML view (Thanks Ohshima-san)

## v3.4.1

* **Bugfix**: Can't copy note link
* **Bugfix**: Can't select multiple notes
* **Bugfix**: Other small regressions due to the recent internal breaking change

## v3.4.0

* **new feature**: Toggling checkbox on preview pane (Thanks Geoff and Jay)
* **improvement**: Retain last update date when changing note's tag, status and notebook
* **Bugfix**: Continuous list feature incorrectly works to Horizontal rule(`* * *`) (Thanks Stephen)
* **Bugfix**: Checkbox formatting includes bullets (Thanks Stephen)

## v3.3.4

* **bugfix**: Rendering corrupt todo list (Thanks Ohshima-san)

## v3.3.3

* **bugfix**: Back-up won't work on Windows (Thanks Ohshima-san)
* **bugfix**: App hangs when indexing too big note (Thanks Ohshima-san)

## v3.3.1

* **bugfix**: Editor stops working in a particular condition #35 (Thanks @almorithm!)

## v3.3.0

* **new feature**: A toolbar button for task list (Thanks Geoff!)
* **improvement**: Continuous task list when hitting return key
* **bugfix**: Cursor sometimes moves to top unexpectedly

## v3.2.0

* **improvement**: Update some syntax themes
* **bugfix**: Prevent moving a notebook to its own child notebook
