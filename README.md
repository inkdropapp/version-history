# Inkdrop Release Notes

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
