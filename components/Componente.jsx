import { useState } from "react";
import style from "../src/styles/Componente.module.css";

const Componente = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);


  const tagValues = {
    "Operação Parada": 1597,
    "Priorização Diretoria": 987,
    "Priorização Produtos": 987,
    "Priorização Produtos/PO": 987,
    "Priorização Novos Negócios": 987,
    "Priorização Relacionamento": 987,
    "Priorização Liberação Técnica": 987,
    "Priorização Plataforma": 987,
    "Priorização Faturamento (Sistemas Internos)": 987,
    "Priorização Credenciamento": 987,
    "Priorização Contratos (Sistemas internos)": 987,
    "Priorização Contratos": 987,
    "Priorização Jurídico": 987,
    "Priorização Call Center": 987,
    "Priorização Contas a Receber": 987,
    "Priorização Financeiro": 987,
    "Priorização Integridade/Compliance": 987,
    "Priorização Licitação": 987,
    "Priorização Fiscal": 987,
    "Priorização Infraestrutura": 987,
    "Priorização Renegociação": 987,
    "Priorização Marketing": 987,
    "Priorização Comercial Privado": 987,
    "Priorização TI": 987,
    "Priorização Gestão e Gente": 987,
    "Notificação com prazo até 24hr": 987,
    "Entrega No mesmo dia (D+0)": 987,
    "Demanda parada a 4 semanas": 987,
    "Demanda parada a 5 semanas": 987,
    "Demanda parada a 6 semanas": 987,
    "Demanda parada a 7 semanas": 987,
    "Demanda parada a 8 semanas": 987,
    "Notificação com prazo maior que 24hr": 610,
    "Demanda parada a 3 semanas": 610,
    "Cliente 'Experiência Perfeita'": 610,
    "Entrega dia seguinte (D+1) (próximo deploy)": 610,
    "Demanda parada a 2 semanas": 377,
    "Projetos Força Tarefa": 377,
    "Ameaça de notificação": 377,
    "Impacta Pagamento": 377,
    "Entrega daqui 2 dias (D+2)": 377,
    "Card com dependência": 233,
    "Atende edital": 233,
    "Impacta Operação": 233,
    "Todos os Clientes": 233,
    "Entrega daqui 3 dias (D+3)": 233,
    "Demanda parada a 1 semana": 233,
    "Impacta faturamento": 144,
    "Impacta entrega de rede (Sistemas Internos)": 144,
    "Impacta liberação do cliente": 144,
    "Impacta saldo contratual (Sistemas Internos)": 144,
    "Impacta Apresentação": 144,
    "Entrega daqui 4 dias (D+4)": 144,
    "Paraná": 89,
    "Cliente Estratégico": 89,
    "Impacta saldo empenho (Sistemas Internos)": 89,
    "Manutenção (Gerenciar OS's)": 34,
    "Material de construção": 34,
    "Aeronaves": 34,
    "Medicamentos": 34,
    "Abastecimento": 34,
    "Atualização em lote": 21,
    "Bug  -  Recorrente": 21,
    "Demanda reincidente (Sistemas Internos)": 16,
    "N Níveis": 16,
    "Terá Divulgação Interna": 13,
    "Bug": 13,
    "Performance": 13,
    "Bug  -  Operação": 13,
    "Bug  -  Projeto": 13,
    "Bug  -  Plataforma": 13,
    "Bug  -  Licitação": 13,
    "Bug  -  Funcional": 13,
    "Bug  -  Backend": 13,
    "Bug  -  Escopo": 13,
    "Bug  -  Crash": 13,
    "Bug  -  API": 13,
    "Bug  -  Layout": 8,
    "Gestão": 8,
    "Sisatec": 8,
    "Credenciado": 5,
    "Manutenção (Oficina)": 3,
    "Processo (Coisas feitas através do próprio sistema (N1))": 2,
    "Vale": 2,
    "Processo (Ativação de Banco, Ativação de permissão, etc)": 1,
    "Implantação": 1,
    "Usuário Cartão": 1,
    "Impacta Mobile": 1,
    "Dúvida": 1,
    "Melhoria": 1,
    "Analise (Solicitação somente de Analise)": 1,
    "Segurança  -  SQL injection": 1,
    "Segurança  -  Swagger UI DOM XSS vulnerability": 1,
    "Segurança  -  Vulnerable JavaScript libraries": 1,
    "Segurança  -  Insecure TLS 1.0": 1,
    "Melhoria": -76,
    "Bug interno": -100,
  };

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    if (selectedOptions.includes(selectedOption)) {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== selectedOption)
      );
    } else {
      setSelectedOptions([...selectedOptions, selectedOption]);
    }
  };

  // Função para calcular a soma das opções selecionadas
  const calcularSoma = () => {
    let soma = 0;
    selectedOptions.forEach((option) => {
      soma += tagValues[option]; // Adiciona o valor da tag selecionada à soma
    });
    return soma;
  };

  

  return (
    <div>
      <h1 className={style.titulo}>Priorizador de demandas</h1>

      <div className={style.container_tags}>
      <label className={style.title_tags} htmlFor="tags">
            Escolha as tags:
          </label>
        <div className={style.box}>
          
      
          {Object.keys(tagValues).map((tag) => (
            <div key={tag}>
              <input
                type="checkbox"
                id={tag}
                name={tag}
                value={tag}
                onChange={handleOptionChange}
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
      
        
      </div>

      {/* Tabela para mostrar o resultado */}
      <table className={style.result}>
        
        <tbody>
          {selectedOptions.map((option) => (
            <tr key={option}>
              <td>{option}</td>
              <td>{tagValues[option]}</td>
            </tr>
          ))}
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>{calcularSoma()}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Componente;
