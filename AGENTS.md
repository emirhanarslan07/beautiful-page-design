<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep Sety navigation and page framing in the shared shell, with separate TanStack content routes; this keeps every page visually consistent and directly accessible.
- Keep the dashboard presentation-only with explicitly labeled demo data and transient React state; visual previews must not imply real saved transactions or account changes.
- Define the Sety visual system in src/styles.css and use semantic tokens in controls and page content; this keeps future design changes consistent.
