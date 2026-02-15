import type { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/shared/ui";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: "Privacy Policy",
};

const PrivacyPolicyPage: React.FC = () => {
	return (
		<Card className="border-0">
			<CardHeader>
				<CardTitle className="text-2xl">Політика конфіденційності</CardTitle>
			</CardHeader>
			<CardContent className="space-y-8 leading-relaxed text-sm text-muted-foreground">
				<section className="space-y-2 text-foreground">
					<h2 className="text-lg font-semibold">1. Загальні положення</h2>
					<p>
						Ця Політика конфіденційності описує, як інтернет-магазин парфумів
						(далі — «Магазин», «ми») збирає, використовує, зберігає та захищає
						персональні дані користувачів і покупців (далі — «Ви»). Користуючись
						нашим вебсайтом і здійснюючи замовлення, Ви погоджуєтесь з умовами
						цієї Політики.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						2. Які дані ми збираємо
					</h2>
					<ul className="list-disc pl-6 space-y-1">
						<li>
							Ідентифікаційні дані: ім’я, прізвище, номер телефону, електронна
							адреса.
						</li>
						<li>
							Дані для доставки: адреса, населений пункт, відділення служби
							доставки.
						</li>
						<li>
							Інформація про замовлення: обрані товари, кількість, вартість,
							історія покупок.
						</li>
						<li>
							Платіжна інформація: статус оплати, спосіб оплати (ми не
							зберігаємо реквізити карток).
						</li>
						<li>
							Технічні дані: IP-адреса, дані браузера, файли cookie, дані
							аналітики.
						</li>
					</ul>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						3. Цілі обробки даних
					</h2>
					<ul className="list-disc pl-6 space-y-1">
						<li>Оформлення, опрацювання та доставка Ваших замовлень.</li>
						<li>
							Надання клієнтської підтримки та комунікацій щодо замовлень.
						</li>
						<li>
							Поліпшення роботи сайту, аналітика та персоналізація контенту.
						</li>
						<li>
							Маркетингові розсилки за Вашою згодою (ви можете відмовитись у
							будь-який час).
						</li>
						<li>Виконання вимог законодавства та запобігання шахрайству.</li>
					</ul>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						4. Правові підстави обробки
					</h2>
					<ul className="list-disc pl-6 space-y-1">
						<li>
							Ваша згода — для маркетингових комунікацій та налаштувань cookie.
						</li>
						<li>Виконання договору — для обробки замовлень та платежів.</li>
						<li>Легітимний інтерес — для покращення сервісу та безпеки.</li>
						<li>
							Юридичний обов’язок — для бухгалтерського обліку та звітності.
						</li>
					</ul>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						5. Файли cookie
					</h2>
					<p>
						Ми використовуємо необхідні файли cookie для коректної роботи сайту,
						а також аналітичні та функціональні cookie для вимірювання трафіку
						та персоналізації. Ви можете керувати cookie через налаштування
						браузера. Вимкнення деяких cookie може вплинути на функціональність
						сайту.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						6. Передача даних третім сторонам
					</h2>
					<p>
						Ми можемо передавати дані надійним постачальникам послуг виключно з
						метою надання послуг Вам:
					</p>
					<ul className="list-disc pl-6 space-y-1">
						<li>Платіжні провайдери для обробки платежів.</li>
						<li>Служби доставки для відправлення замовлень.</li>
						<li>Провайдери аналітики для аналізу відвідуваності сайту.</li>
						<li>
							IT-провайдери для хостингу та обслуговування інфраструктури.
						</li>
					</ul>
					<p>Ми не продаємо Ваші персональні дані третім особам.</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						7. Зберігання даних
					</h2>
					<p>
						Ми зберігаємо персональні дані лише стільки, скільки це необхідно
						для цілей, описаних у цій Політиці, або протягом строків, визначених
						законом (наприклад, для бухгалтерського обліку).
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						8. Безпека даних
					</h2>
					<p>
						Ми впроваджуємо технічні та організаційні заходи безпеки для захисту
						Ваших даних від несанкціонованого доступу, зміни, розкриття чи
						знищення. Однак жоден метод передачі даних через інтернет або
						електронного зберігання не є на 100% безпечним.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						9. Ваші права
					</h2>
					<p>Ви маєте право:</p>
					<ul className="list-disc pl-6 space-y-1">
						<li>доступу до своїх персональних даних;</li>
						<li>виправлення неточних або застарілих даних;</li>
						<li>
							видалення даних («право на забуття») у передбачених законом
							випадках;
						</li>
						<li>обмеження обробки та заперечення проти обробки;</li>
						<li>перенесення даних у машиночитному форматі;</li>
						<li>
							відкликання згоди — для обробки, що здійснюється на підставі
							згоди.
						</li>
					</ul>
					<p>
						Щоб реалізувати свої права, зверніться до нас через розділ
						«Контакти» на сайті.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						10. Дані неповнолітніх
					</h2>
					<p>
						Наш сайт не призначений для осіб молодше 16 років, і ми свідомо не
						збираємо їхні персональні дані. Якщо Ви є батьком/матір’ю та
						вважаєте, що дитина надала нам дані, повідомте нас для видалення
						такої інформації.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						11. Зміни до Політики
					</h2>
					<p>
						Ми можемо оновлювати цю Політику час від часу. Актуальна версія
						завжди доступна на цій сторінці. Дата оновлення: 01.09.2025.
					</p>
				</section>

				<section className="space-y-2">
					<h2 className="text-lg font-semibold text-foreground">
						12. Контакти
					</h2>
					<p>
						Якщо у Вас є запитання щодо цієї Політики або обробки даних,
						зв’яжіться з нами через розділ «Контакти» на сайті. Ми відповімо у
						розумний строк.
					</p>
				</section>
			</CardContent>
		</Card>
	);
};

export default PrivacyPolicyPage;
