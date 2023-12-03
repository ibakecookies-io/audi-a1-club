

export default function BodyText( ){
    return(
        <div className="relative flex-col bg-gray-700/40 items-center justify-center">
            <div className="p-4">
                <div className="rounded-lg bg-black bg-opacity-30 p-4">
                    <h1 className="mt-10 text-xl font-semibold">О клубе</h1>
                    <p className="mt-4">
                        Мы молодое сообщество ценителей Audi A1 со всей России и не только.
                    </p>
                    <p className="mt-4">
                        В нашем клубе дружная и теплая отмосфера. Сообщество включает в себя более 150.
                    </p>
                    <p className="mt-4">
                        Сообщество основано в 2019 году.
                    </p>

                    <h1 className="mt-10 text-xl font-semibold">Правила клуба</h1>
                    <p className="mb-10 mt-4">
                        <span className="text-xl text-red-600">1.</span> Не допускаются грубостни и оскорбления в адрес других участников клуба.
                    </p>
                    <p className="mb-10 mt-4">
                        <span className="text-xl text-red-600">2.</span> Не допускается нарушение законодательства Российской Федерации.
                    </p>
                </div>
            </div>
        </div>
    )
}