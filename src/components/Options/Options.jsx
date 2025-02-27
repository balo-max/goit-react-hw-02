import css from './Options.module.css'

export default function Description({ updateFeedback, totalFeedback, resetFeedback }) {

    return (
        <ul className={css.list}>
            <li><button onClick={() => updateFeedback('good')} className={css.btnOptions}>Good</button></li>
            <li><button onClick={() => updateFeedback('neutral')} className={css.btnOptions}>Neutral</button></li>
            <li><button onClick={() => updateFeedback('bad')} className={css.btnOptions}>Bad</button></li>
            {totalFeedback !== 0 && <li><button onClick={resetFeedback} className={css.btnOptions}>Reset</button></li>}
        </ul>
    );
}