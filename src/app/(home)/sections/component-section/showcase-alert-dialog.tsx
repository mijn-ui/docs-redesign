const ShowcaseAlertDialog = () => (
  <div className="p-10">
    <div className="flex w-full max-w-lg flex-col gap-2 rounded-xl border bg-bg-default-alt p-4 shadow-md">
      <div>
        <h5 className="font-semibold text-sm">Are you sure absolutely sure?</h5>
        <p className="mt-2 text-fg-secondary text-xs">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </p>
      </div>

      <div className="flex items-center justify-end gap-2">
        <button
          className="rounded-md px-3 py-2 text-xxs hover:bg-bg-bg-secondary hover:text-accent-foreground sm:text-xs"
          tabIndex={-1}
          type="button"
        >
          Cancel
        </button>
        <button
          className="rounded-md bg-bg-brand px-3 py-2 text-on-bg-brand text-xxs sm:text-xs"
          tabIndex={-1}
          type="button"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
);

export default ShowcaseAlertDialog;
