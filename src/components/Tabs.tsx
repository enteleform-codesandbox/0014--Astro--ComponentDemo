/** @jsxImportSource solid-js */

//###  Reference  ###//
// https://hope-ui.com/docs/navigation/tabs

import {
	HopeProvider,
	Tab,
	TabList,
	TabPanel,
	Tabs as TabsContainer,
} from "@hope-ui/solid"


export function Tabs(){
	console.log("Render: Tabs")

	return (
		<HopeProvider enableCssReset={false}>
			<TabsContainer alignment="center" keepAlive>

				<TabList>
					<Tab>{"A"}</Tab>
					<Tab>{"B"}</Tab>
					<Tab>{"C"}</Tab>
				</TabList>

				<TabPanel>{A_Content}</TabPanel>
				<TabPanel>{B_Content}</TabPanel>
				<TabPanel>{C_Content}</TabPanel>

			</TabsContainer>
		</HopeProvider>
	)
}


const A_Content = `
Lorem ipsum dolor sit amet. Ut saepe quidem sed placeat error est consequatur fugiat. Ea enim internos qui quae veritatis est fuga temporibus in quia adipisci et dolor dignissimos et voluptatem sequi a quam repellat. Et dignissimos quasi aut architecto quod a impedit alias.

Et sequi nostrum hic consequatur nisi ex debitis laborum ut fugiat fugit qui adipisci illo et sint dolorem. Et sint quod vel totam velit et Quis nemo et quia architecto et deleniti possimus non provident consequuntur. Qui culpa rerum est nihil distinctio aut repudiandae culpa et similique incidunt. 33 quia obcaecati et deleniti rerum sed quod impedit ea voluptatem voluptatum sit error animi sit quas accusamus non asperiores soluta.

Et error voluptatem ut quasi corrupti et animi aliquid qui reiciendis consequatur eos eaque quos et omnis quis. Est velit laboriosam ut omnis dolorem qui doloremque officia. Et iste voluptatibus maiores minus ut expedita nesciunt nam omnis facere et quia galisum.
`.trim()

const B_Content = `
Ea consequatur eveniet nam galisum consequatur non molestiae accusantium non tempore laborum quo dolorem enim quo enim recusandae ad saepe aperiam. Rem officiis similique sed nihil quis aut repudiandae rerum hic praesentium ullam. Eos recusandae illum qui vero iusto ea vitae dolores.

Et amet fuga et architecto veritatis ut necessitatibus assumenda id veniam atque rem assumenda deleniti ullam fuga ut galisum tenetur? Ut illo recusandae sed aliquam galisum quo alias earum et galisum tenetur in neque voluptas.

Qui repudiandae consequuntur est cumque magni quo possimus dolorem ea iusto nihil et animi dolores. Non aliquid quisquam debitis vitae aut quis rerum. Et dolor nemo aut nihil internos est illum esse et neque fugiat.
`.trim()

const C_Content = `
In tempora nisi sit omnis quaerat ex nihil quasi ea assumenda dicta. Ut nihil autem sit iste quisquam qui rerum labore quo architecto vitae vel laudantium necessitatibus. Non fuga voluptas qui tempora iusto et quas nesciunt eum eveniet odit aut vero.

Est quos voluptatibus id cumque animi ut dolore enim. Ut eaque deserunt nam iusto magnam est rerum molestiae. Ea voluptatem voluptatibus sit praesentium voluptatem aut excepturi praesentium non voluptate voluptas et omnis illum sed adipisci quod.

Non modi laboriosam sed cupiditate tempore sed quisquam sapiente eos dolorum magnam. Et assumenda perferendis non magni repellat non rerum aliquid vel ipsa sequi.
`.trim()

