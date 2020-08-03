import React, {Component} from 'react';

const translateLang = { //на сколько я понял по идее тут нужно подключить переводчик а
    // не создавать словарь то есть он сейчас переводит только эти три слова
    book: "книга",
    door: "дверь",
    boll: "мяч",
};

const content = {
    p: "Привет мир!"
};

class FormTextarea extends Component {
    state = {
        text: '',
        contentP: "Hello world"
    };

    inputChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value}) // беру значения записываю в state
    };

    changeLangText = e => {
        let text = '';
        let txt = this.state.text.toLowerCase();

        if (!translateLang[txt]) {
            text = "Я незнаю таких слов!"
        } else {
            text = translateLang[txt]
        }
        this.setState({text : text, contentP: content.p}); //по клику меняю значение которое беру
        // с обьекта translateLang по ключу а также меняю значение contentP который в default указан на eng языке
    };

    render() {
        // console.log(this.state)
        return (
            <div>
                <p>{this.state.contentP}
                    <button name="ru" onClick={this.changeLangText}>Ru</button>
                </p>

                <textarea name="text" value={this.state.text} id="" cols="30" rows="10"
                          onChange={this.inputChangeHandler}/>
            </div>
        );
    }
}

export default FormTextarea;