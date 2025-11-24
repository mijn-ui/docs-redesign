const ShowcaseCalendar = () => {
  return (
    <div className="max-h-full max-w-52 overflow-hidden rounded-lg border border-outline-default bg-bg-default p-2">
      <div className="relative flex flex-col sm:flex-row">
        {/* --------------------------- DATE PICKER NAVBAR ---------------------------  */}
        <nav>
          <button
            aria-label="Go to the Previous Month"
            className="absolute top-0 left-1 z-10 inline-flex size-6 items-center justify-center gap-1 rounded-md border border-outline-default bg-transparent p-0 text-xxs opacity-50 transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary hover:opacity-100 active:brightness-95"
            tabIndex={-1}
            type="button"
          >
            <svg
              className="size-4"
              fill="none"
              height="1em"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Go to the Next Month"
            className="absolute top-0 right-1 z-10 inline-flex size-6 items-center justify-center gap-1 rounded-md border border-outline-default bg-transparent p-0 text-xxs opacity-50 transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary hover:opacity-100 active:brightness-95"
            tabIndex={-1}
            type="button"
          >
            <svg
              className="size-4"
              fill="none"
              height="1em"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </nav>
        {/* /* ---------------------------- DATE PICKER TITLE --------------------------- * / */}
        <div>
          <div className="relative flex items-center justify-center py-2">
            <span className="font-medium text-xxs">October 2024</span>
          </div>
          {/* /* ---------------------------- DATE PICKER TABLE --------------------------- * / */}
          <table
            aria-label="October 2024"
            className="w-full border-collapse space-y-1"
          >
            {/* Date Picker Table Caption */}
            <thead>
              <tr className="flex">
                <th
                  aria-label="Sunday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  Su
                </th>
                <th
                  aria-label="Monday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  Mo
                </th>
                <th
                  aria-label="Tuesday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  Tu
                </th>
                <th
                  aria-label="Wednesday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  We
                </th>
                <th
                  aria-label="Thursday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  Th
                </th>
                <th
                  aria-label="Friday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  Fr
                </th>
                <th
                  aria-label="Saturday"
                  className="flex size-6 items-center justify-center font-normal text-fg-tertiary text-xxs"
                  scope="col"
                >
                  Sa
                </th>
              </tr>
            </thead>
            {/* Date Picker Table Numbers */}
            <tbody>
              <tr className="mt-0.5 flex w-full">
                <td className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-fg-tertiary text-xxs opacity-50 transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95">
                  <button
                    aria-label="Sunday, September 29th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    29
                  </button>
                </td>
                <td
                  className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-fg-tertiary text-xxs opacity-50 transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-09-30"
                  data-month="2024-09"
                  data-outside="true"
                >
                  <button
                    aria-label="Monday, September 30th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    30
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-01"
                >
                  <button
                    aria-label="Tuesday, October 1st, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    1
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-02"
                >
                  <button
                    aria-label="Wednesday, October 2nd, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    2
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-03"
                >
                  <button
                    aria-label="Thursday, October 3rd, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    3
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-04"
                >
                  <button
                    aria-label="Friday, October 4th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    4
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-05"
                >
                  <button
                    aria-label="Saturday, October 5th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    5
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-06"
                >
                  <button
                    aria-label="Sunday, October 6th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    6
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-07"
                >
                  <button
                    aria-label="Monday, October 7th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    7
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-08"
                >
                  <button
                    aria-label="Tuesday, October 8th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    8
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-09"
                >
                  <button
                    aria-label="Wednesday, October 9th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    9
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-10"
                >
                  <button
                    aria-label="Thursday, October 10th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    10
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-11"
                >
                  <button
                    aria-label="Friday, October 11th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    11
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-12"
                >
                  <button
                    aria-label="Saturday, October 12th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    12
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-13"
                >
                  <button
                    aria-label="Sunday, October 13th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    13
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-14"
                >
                  <button
                    aria-label="Monday, October 14th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    14
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-15"
                >
                  <button
                    aria-label="Tuesday, October 15th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    15
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-16"
                >
                  <button
                    aria-label="Wednesday, October 16th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    16
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-17"
                >
                  <button
                    aria-label="Thursday, October 17th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    17
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-18"
                >
                  <button
                    aria-label="Friday, October 18th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    18
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-19"
                >
                  <button
                    aria-label="Saturday, October 19th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    19
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-20"
                >
                  <button
                    aria-label="Sunday, October 20th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    20
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md bg-bg-brand p-0 font-normal text-on-bg-brand text-xxs transition-colors duration-150 hover:bg-bg-brand hover:text-fg-brand focus:bg-bg-brand focus:text-fg-brand active:brightness-95"
                  data-day="2024-10-21"
                  data-selected="true"
                  data-today="true"
                >
                  <button
                    aria-label="Today, Monday, October 21st, 2024, selected"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    21
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-22"
                >
                  <button
                    aria-label="Tuesday, October 22nd, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    22
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-23"
                >
                  <button
                    aria-label="Wednesday, October 23rd, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    23
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-24"
                >
                  <button
                    aria-label="Thursday, October 24th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    24
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-25"
                >
                  <button
                    aria-label="Friday, October 25th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    25
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-26"
                >
                  <button
                    aria-label="Saturday, October 26th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    26
                  </button>
                </td>
              </tr>
              <tr className="mt-0.5 flex w-full">
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-27"
                >
                  <button
                    aria-label="Sunday, October 27th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    27
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-28"
                >
                  <button
                    aria-label="Monday, October 28th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    28
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-29"
                >
                  <button
                    aria-label="Tuesday, October 29th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    29
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-30"
                >
                  <button
                    aria-label="Wednesday, October 30th, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    30
                  </button>
                </td>
                <td
                  className="inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-xxs transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-10-31"
                >
                  <button
                    aria-label="Thursday, October 31st, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    31
                  </button>
                </td>
                <td
                  className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-fg-tertiary text-xxs opacity-50 transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-11-01"
                  data-month="2024-11"
                  data-outside="true"
                >
                  <button
                    aria-label="Friday, November 1st, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    1
                  </button>
                </td>
                <td
                  className="day-outside inline-flex size-6 items-center justify-center gap-1 rounded-md p-0 font-normal text-fg-tertiary text-xxs opacity-50 transition-colors duration-150 hover:bg-bg-secondary hover:text-fg-secondary active:brightness-95"
                  data-day="2024-11-02"
                  data-month="2024-11"
                  data-outside="true"
                >
                  <button
                    aria-label="Saturday, November 2nd, 2024"
                    className="relative size-6 p-0 text-center text-xxs focus-within:relative focus-within:z-20"
                    tabIndex={-1}
                    type="button"
                  >
                    2
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCalendar;
