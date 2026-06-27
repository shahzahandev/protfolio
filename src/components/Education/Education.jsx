import Container from '../Container/Container'

const Education = () => {

    const services = [
        {
            title: "Management ERP System",
            description:
                "A complete management platform designed to streamline administrative tasks, record keeping, attendance monitoring, and reporting processes.",
            type: "ERP System",
            label: "Web App",
            color: "bg-blue-600",
            features: [
                  "Secure role-based authentication",
    "Attendance and record management",
    "Real-time reports and analytics",

            ],
            icon: (
                <>
                    <path d="M4 19.5V6.8a2 2 0 0 1 1.2-1.83l6-2.67a2 2 0 0 1 1.6 0l6 2.67A2 2 0 0 1 20 6.8v12.7" />
                    <path d="M8 21v-7h8v7" />
                    <path d="M9 9h.01" />
                    <path d="M15 9h.01" />
                </>
            ),
        },
        {
            title: "Modern Web Application",
            description:
                "Responsive and user-friendly web application featuring dynamic content, intuitive navigation, and modern UI design for an engaging user experience.",
            type: "HRM System",
            label: "Dashboard",
            color: "bg-teal-700",
            features: [
                 "Responsive design",
        "Interactive user interface",
        "Fast and optimized performance",
            ],
            icon: (
                <>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </>
            ),
        },
        {
            title: "Single Vendor E-Commerce Platform",
            description:
                "Full-featured online store with product management, shopping cart, secure authentication, and seamless order processing for a single business.",
            type: "Healthcare",
            label: "System",
            color: "bg-red-600",
            features: [
        "Product and inventory management",
        "Cart and checkout system",
        "Order tracking and management",
            ],
            icon: (
                <>
                    <path d="M12 6v4" />
                    <path d="M14 14h-4" />
                    <path d="M14 18h-4" />
                    <path d="M18 10h1a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h1" />
                    <path d="M8 10V6a4 4 0 0 1 8 0v4" />
                </>
            ),
        },
        {
            title: "Multi-Vendor E-Commerce Marketplac",
            description:
                "Marketplace and ecommerce platforms with vendor panels, product management, orders, payments, and commissions.",
            type: "Marketplace",
            label: "Platform",
            color: "bg-amber-600",
            features: [
                "Vendor and admin dashboards",
                "Product, order, payment modules",
                "Commission and sales reports",
            ],
            icon: (
                <>
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                </>
            ),
        },
    ];



    return (
        <>
        <div className='bg-primary font-primary'>
 <Container>
            <section
                id="services"
                className="w-full px-5 py-20 sm:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mb-9 grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                        <div>
                            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-heading sm:text-5xl lg:text-6xl">
                                Business management software for real daily operations.
                            </h2>
                        </div>

                        <p className="text-base leading-8 text-text sm:text-lg">
                            I build and customize practical web systems for schools, madrasahs,
                            hospitals, HR teams, and online marketplaces, with dashboards that
                            make daily work faster.
                        </p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {services.map((service) => (
                            <article
                                key={service.title}
                                className="flex min-h-[328px] flex-col overflow-hidden rounded-lg border  bg-white/5 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-heading hover:shadow-[0px_0px_20px_rgba(12,241,153,.25)]"
                            >
                                <div
                                    className={`mb-6 grid h-12 w-12 place-items-center rounded-lg text-white ${service.color}`}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        {service.icon}
                                    </svg>
                                </div>

                                <h3 className="mb-3 min-h-[58px] text-xl font-bold leading-snug tracking-normal text-heading md:min-h-[58px]">
                                    {service.title}
                                </h3>
                                <p className="text-[15px] leading-7 text-text">
                                    {service.description}
                                </p>

                                <ul className="mt-6 grid gap-2.5">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2.5 text-sm leading-6 text-secondary"
                                        >
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm font-extrabold text-secondary">
                                    {service.type}
                                    <span className="font-semibold text-gray-500">{service.label}</span>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 grid items-center gap-5 rounded-lg border  bg-white/5 p-6 md:grid-cols-[1fr_auto]">
                        <div>
                            <strong className="mb-1.5 block text-lg text-text">
                                Need a custom module or full management system?
                            </strong>
                            <p className="leading-7 text-secondary">
                                I can plan, develop, customize, and deploy a system based on your
                                business workflow.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center rounded-[25px] border-2 border-heading bg-heading px-5 text-sm font-extrabold text-black no-underline transition hover:bg-transparent hover:text-heading hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]"
                        >
                            Discuss Project
                        </a>
                    </div>
                </div>
            </section>
            </Container>
        </div>           
        </>
    )
}

export default Education