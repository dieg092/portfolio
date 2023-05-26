import Arrows from './svg/arrows'
import Plus from './svg/plus'

function renderItem(item, index, type) {
    const { title, description } = item

    return (
        <div key={index} className="hs-accordion" id="hs-basic-heading-one">
            <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                aria-controls="hs-basic-collapse-one"
            >
                {type == 'arrow' ? <Arrows /> : type == 'plus' && <Plus />}
                {title}
            </button>
            <div
                id="hs-basic-collapse-one"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                aria-labelledby="hs-basic-heading-one"
            >
                <p className="text-gray-800 dark:text-gray-200">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function Accordion({ items, type }) {
    return (
        <div className="container mx-auto">
            <div className="hs-accordion-group">
                {items &&
                    items.map((item, index) => {
                        return renderItem(item, index, type)
                    })}
            </div>
        </div>
    )
}
