import React, { Component } from 'react';

class LastJob extends Component {
    render() {
        const { handleChange, mouseEnter } = this.props;

        return(
          <fieldset className="last-job">
            <legend>Dados do último emprego</legend>
            <div className="area-resume">
                <label htmlFor="area-resume">Resumo do currículo: </label>
                <textarea 
                 name="areaResume" 
                 id="area-resume" 
                 cols="30" rows="10"
                 maxLength='1000'
                 onChange={handleChange}
                 required>
                </textarea>
            </div>
            
            <div className="area-cargo">
                <label htmlFor="area-cargo">Cargo: </label>
                <textarea 
                 name="areaCargo" 
                 id="area-cargo" 
                 cols="30" rows="10"
                 maxLength='40'
                 onMouseEnter={mouseEnter}
                 onChange={handleChange}
                 required>
                </textarea>
            </div>
            
            <div className="area-cargo">
                <label htmlFor="area-description">Descrição do cargo</label>
                <textarea 
                 name="areaDescription" 
                 id="area-description" 
                 cols="30" rows="10"
                 maxLength='500'
                 onChange={handleChange}
                 required>
                </textarea>
            </div>
          </fieldset>  
        )
    }
}

export default LastJob
