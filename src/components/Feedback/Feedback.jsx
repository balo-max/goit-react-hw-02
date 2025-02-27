import css from './Feedbakc.module.css'

export default function Feedback({ count: { good, neutral, bad }, totalFeedback, PositiveFeedback }) {
    return (
        <ul className={css.feedbackList}>
            <li className={css.text}>Good: {good}</li>
            <li className={css.text}>Neutral: {neutral}</li>
            <li className={css.text}>Bad: {bad}</li>
            {totalFeedback !== 0 && <li className={css.text}>Total: {totalFeedback}</li>}
            {totalFeedback !== 0 && <li className={css.text}>Positive: {PositiveFeedback}%</li>}
        </ul>
    );
}