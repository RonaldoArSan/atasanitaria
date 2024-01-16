


export function Ata(){
    return(

        <main className="" >

            <div className="border-red-500 mt-6 mb-8 bg-cyan-900 p-8 rounded-lg ">
            <form className="flex grid-cols-2 gap-4 border-spacing-4 mt-4 rounded-xl">
                <div className="block text-sm font-medium  text-gray-200 " >
                    <label htmlFor="" className="pb-16 mx-8">Declaração de Óbito nª</label>
                    <input type="text"  name="Declaração de Óbito" />
                </div>
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg" >Ata nº</label>
                    <input type="text"  name="Declaração de Óbito" className="text-black"/>
                </div>
                       
            </form>
            </div >

            <span className="h-screen text-cyan-100 my-8" >Dados do Falecido</span>
            
            <div className="border-red-500 mt-6 mb-8 bg-cyan-900 p-8 rounded-lg">
            <form className="grid-flow-col auto-cols-max hover:auto-cols-max gap-4 border-spacing-4 mt-4 rounded-xl mb-8 justify-center space-y-4">
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg">Nome do Falecido</label>
                    <input type="text"  name="Nome"/>
                </div>
                
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor=""className="pb-1 mx-8 rounded-lg">Data Nascimento</label>
                    <input type="text"  name="Data Nascimento"/>
                </div>
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg">Sexo</label>
                    <input type="text"  name="Sexo"/>
                </div>
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg">Idade</label>
                    <input type="text"  name="Idade"/>
                </div>
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor=""  className="pb-1 mx-8 rounded-lg">Cor</label>
                    <input type="text"  name="Cor"/>
                </div>
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg">Naturalidade</label>
                    <input type="text"  name="Naturalidade"/>
                </div>
                <div className="block text-sm font-medium  text-gray-200 ">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg">Nome do Pai</label>
                    <input type="text"  name="Nome"/>
                </div>
                <div className="block text-sm font-medium  text-gray-200 mb-8">
                    <label htmlFor="" className="pb-1 mx-8 rounded-lg">Nome da Mãe</label>
                    <input type="text"  name="Nome da Mãe"/>
                </div>
            </form>
            </div>
            <span className="h-screen text-cyan-100 my-8">Dados do Falecimento</span>
            <form>
                <div>
                    <label htmlFor="">Data do Óbito</label>
                    <input type="text"  name="Data do Óbito"/>
                </div>
                <div>
                    <label htmlFor="">Hora do Óbito</label>
                    <input type="text"  name="Hora do Óbito"/>
                </div>
                <div>
                    <label htmlFor="">Local do Obito</label>
                    <input type="text"  name="Nome da Mãe"/>
                </div>
                <div>
                    <label htmlFor="">Nome do Medico</label>
                    <input type="text"  name="Nome do Medico"/>
                </div>
                <div>
                    <label htmlFor="">CRM</label>
                    <input type="text"  name="Nome da Medica"/>
                </div>
                <div>
                    <label htmlFor="">Nome da Medica</label>
                    <input type="text"  name="Nome da Mãe"/>
                </div>
                <div>
                    <label htmlFor="">CRM</label>
                    <input type="text"  name="CRM"/>
                </div>
                <div>
                    <label htmlFor="">Causa da Morte</label>
                    <input type="text"  name="Causa da Morte"/>
                </div>

            </form>

            
        </main>
    )
}