// export function FeedbackOptions({ options }, onLeaveFeedback) {
//   return options.map(option => {
//     return (
//       <button id="good" onClick={onLeaveFeedback}>
//         {/* {option.good} */}
//       </button>
//     );
//   });
// }

//!

export function FeedbackOptions(items) {
  console.log(typeof items);

  items.map(item => <div></div>);
}

//   return (
//     <>
//       <button id="good" onClick={onLeaveFeedback}>
//         Good
//       </button>
//       <button id="neutral" onClick={onLeaveFeedback}>
//         Neutral
//       </button>
//       <button id="bad" onClick={onLeaveFeedback}>
//         Bad
//       </button>
//     </>
//   );
