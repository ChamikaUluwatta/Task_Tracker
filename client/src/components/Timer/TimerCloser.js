const TimerCloser = (props) => {
  const onCloseTimerHandler = () => {
    props.onCloseTime();
  };

  return (
    <div className="flex">
      <button
        onClick={onCloseTimerHandler}
        type="button"
        class=" rounded-md  p-8 bg-slate-900  hover:text-red-500 hover:bg-red focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
      >
        <span class="sr-only">Close menu</span>
        <svg
          class="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default TimerCloser;
