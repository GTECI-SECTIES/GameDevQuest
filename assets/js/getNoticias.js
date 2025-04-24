const domContainer = document.querySelector('#react_noticias');
const root = ReactDOM.createRoot(domContainer);
const useState = React.useState;
const useEffect = React.useEffect;

const News = () => {
    const [arrayNoticias, setArrayNoticias] = useState([{}]);

    useEffect(() => {
        async function buscarNoticias() {
            await axios.get("http://localhost:1337/api/noticias").then(resp => {
                const resposta = resp.data.data;
                let noticiasOrganizadas = [];

                resposta.forEach((conteudo, i) => {
                    if (i >= 4) {
                        return;
                    } else {
                        
                        noticiasOrganizadas.push({
                            titulo: conteudo.titulo,
                            link: conteudo.url,
                            descricao: conteudo.descricao,
                            imagem: conteudo.imagem  // Pega a URL da imagem
                        });
                    }
                });

                setArrayNoticias(noticiasOrganizadas);
                console.log(noticiasOrganizadas);
            });
        }

        buscarNoticias();
    }, []);

    const limitarTexto = (texto, limite = 200) => {
        if (!texto) return "";
        if (texto.length > limite) {
            return texto.substring(0, limite) + "...";
        }
        return texto;
    };

    return arrayNoticias.map((noticia, i) => {
        return (
            <article className="news-item" key={i}>
                <div className="news-img">
                    {/* Verifique se há uma imagem e exiba */}
                    {noticia.imagem && <img src={noticia.imagem} alt="Imagem Notícia" />}
                    <a href={noticia.link} className="news-btn">Saiba mais</a>
                </div>
                <h3 className="news-title">{noticia.titulo}</h3>
                <p className="new-text">{limitarTexto(noticia.descricao)}</p>
            </article>
        );
    });
};

root.render(<News />);
