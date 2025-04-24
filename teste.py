import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = "https://paraiba.pb.gov.br/diretas/secretaria-da-ciencia-tecnologia-inovacao-e-ensino-superior/noticias/noticias-recentes"

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()

    soup = BeautifulSoup(response.content, 'html.parser')

    #print(soup)
    
    news_items = []
    
    # Encontrar todos os elementos de notícia
    #for article in soup.find_all('div', class_='tileItem'):
    for article in soup.find_all('div', class_='tileContent'):
        #"tileItem visualIEFloatFix tile-collective-nitf-content"
        
        print(article) 
        print("+++++++++++++++++++++++++++++++++++++++++++++++++++")
        # Extrair título e link
        title_tag = article.find('h2', class_='tileHeadline')
        if title_tag and title_tag.a:
            title = title_tag.a.text.strip()
            link = title_tag.a['href']
            
            # Garantir que o link está absoluto
            link = urljoin(url, link)
            
            # Extrair descrição
            description_tag = article.find('div', class_='description')
            description = description_tag.text.strip() if description_tag else 'Sem descrição disponível'
            
            news_items.append({
                'title': title,
                'link': link,
                'description': description
            })

    # Exibir resultados
    for idx, news in enumerate(news_items, 1):
        print(f"Notícia {idx}:")
        print(f"Título: {news['title']}")
        print(f"Link: {news['link']}")
        print(f"Descrição: {news['description']}")
        print("-" * 80)

except requests.exceptions.HTTPError as e:
    print(f"Erro HTTP: {e}")
except requests.exceptions.RequestException as e:
    print(f"Erro na requisição: {e}")
except Exception as e:
    print(f"Erro inesperado: {e}")




# <article class="tileItem visualIEFloatFix tile-collective-nitf-content">

#         <div class="tileContent">
          
#           <div class="tileImage">
#             <a href="https://paraiba.pb.gov.br/diretas/secretaria-da-ciencia-tecnologia-inovacao-e-ensino-superior/noticias/tecnologia-e-usada-para-preservacao-da-memoria-cultural-da-paraiba">
#               <img src="https://paraiba.pb.gov.br/diretas/secretaria-da-ciencia-tecnologia-inovacao-e-ensino-superior/noticias/tecnologia-e-usada-para-preservacao-da-memoria-cultural-da-paraiba/12-11-2024-visita-nucleo-de-estudos-arqueologicos-mateus-de-medeiros-3.jpg/@@images/bdbe5d80-8a16-421a-88d5-27ba3ef157d1.jpeg" alt="12.11.2024 - Visita Núcleo de Estudos Arqueológicos  - Mateus de Medeiros-3.jpg" title="12.11.2024 - Visita Núcleo de Estudos Arqueológicos  - Mateus de Medeiros-3.jpg" height="85" width="128" class="tileImage">
#             </a>
#           </div>

          
#           <h2 class="tileHeadline">
#             <a class="summary url" href="https://paraiba.pb.gov.br/diretas/secretaria-da-ciencia-tecnologia-inovacao-e-ensino-superior/noticias/tecnologia-e-usada-para-preservacao-da-memoria-cultural-da-paraiba" title="collective.nitf.content">Tecnologia é usada para preservação da memória cultural da Paraíba</a>
#           </h2>

#           <p class="tileBody">
#             <span class="description">Parceria entre a Secties e a FCJA permite uso de novas tecnologias na preservação e acesso da memória cultural da Paraíba</span>
#           </p>

#           <div class="keywords">
#               tags:
#               <span>
#                   <a href="https://paraiba.pb.gov.br/@@busca?Subject:list=Tecnologia" class="link-category" rel="nofollow tag">Tecnologia</a>,
#               </span>
#               <span>
#                   <a href="https://paraiba.pb.gov.br/@@busca?Subject:list= Preservação Cultural" class="link-category" rel="nofollow tag"> Preservação Cultural</a>,
#               </span>
#               <span>
#                   <a href="https://paraiba.pb.gov.br/@@busca?Subject:list=Secties" class="link-category" rel="nofollow tag">Secties</a>,
#               </span>
#               <span>
#                   <a href="https://paraiba.pb.gov.br/@@busca?Subject:list=Fundação Casa José Américo " class="link-category" rel="nofollow tag">Fundação Casa José Américo </a>,
#               </span>
#               <span>
#                   <a href="https://paraiba.pb.gov.br/@@busca?Subject:list=" class="link-category" rel="nofollow tag"></a>
#               </span>
#           </div>

#         </div>

        
#         <span class="documentByLine">
            
            
            
            
            
                
                
#                     <span class="hiddenStructure">
#                         publicado
#                     </span>
#                     <span class="summary-view-icon">
#                         <i class="icon-day"></i>
#                         24/02/2025
#                     </span>
#                     <span class="summary-view-icon">
#                         <i class="icon-hour"></i>
#                         10h00
#                     </span>
#                     <span class="summary-view-icon">
#                         <i class="icon-news"></i>
#                         Notícias
#                     </span>
                
#                 <div class="visualClear"><!-- --></div>
            
#         </span>

#       </article>