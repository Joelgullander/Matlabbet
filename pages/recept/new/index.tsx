import React from 'react'
import { NextPage, NextPageContext } from 'next';
import { Recipe, Keyword } from '../../../types/Recipe';
import Container from '../../../components/Container';
import { Select, Input, TimePicker, Button } from 'antd';
import axios from 'axios';
import moment from 'moment';

const { Option } = Select;
const { TextArea } = Input;
const format = 'HH:mm';


interface MyPropsInterface {
    recipe: Recipe,
    keywords:  Array<Keyword>
}

interface IState {
    keywords: Array<string>,
    recipe: Recipe
}

interface Context extends NextPageContext {

} 

interface ServerResponse {
    data: Array<Keyword>
}


class NewRecipePage extends React.Component<MyPropsInterface, IState> {
    state: IState = {
        keywords: [],
        recipe: {
            created: new Date().toJSON(),
            updated: new Date().toJSON(),
            name: null,
            description: null,
            author: null,
            cookingTime: new Date().toJSON(),
            prepTime: new Date().toJSON(),
            recipeKeywords: null,
            recipeCategory: null,
            recipeCuisine: null,
            recipeIngredients: null,
            recipeInstructions: null,
            quantityServings: null
        }
    }
    static async getInitialProps({ pathname }: NextPageContext) {
        const keywords : ServerResponse = await axios.get(`http://localhost:5000/api/v1/Keyword`);
        return {
            recipe: null,
            keywords: keywords.data
        }
    }

    // handleSelect = ( value ) => {
    //     if(!this.state.keywords.find(keyword => keyword.keywordName === value))
    //     {
    //         axios.post(
    //             '/api/v1/Keyword', 
    //             {
    //                 keywordName: value
    //             }
    //         ).then(({ data }) => this.setState({ 
    //             recipe: {
    //                 ...this.state.recipe,
    //                 recipeKeywords: [...this.state.recipe.recipeKeywords, data]
    //             }
    //         }));
    //     } else {
    //         const keyword = this.state.keywords.find(keyword => keyword.keywordName === value);
    //         this.setState({
    //             recipe: {
    //                 ...this.state.recipe,
    //                 recipeKeywords: this.state.recipe.recipeKeywords.concat(keyword)
    //             }
    //         })

    //     }
    // }

    // handleDeselect = ( value ) => {
    //     this.setState({
    //         recipe: {
    //             ...this.state.recipe,
    //             recipeKeywords: this.state.recipe.recipeKeywords.filter(x => x.keywordName !== value)
    //         }
    //     })
    // }

    // handleSearch = (value) => {
    //     console.log(`search ${value}`);
    //     axios.get(`/api/v1/Keyword?search=${value}`).then(({data}) => {
    //         this.setState({
    //             keywords: data
    //         })
    //     })
    // }

    fieldsOnChange = (event) => {
        const path = event.target.name.split('.');
        const depth = path.length;
        const state = { ...this.state };
        let stateRef = state;
        for (let i = 0; i < depth; i += 1) {
          if (i === depth - 1) {
            stateRef[path[i]] = event.target.value;
          } else {
            stateRef = stateRef[path[i]];
          }
        }
        this.setState(state);
    }

    cookingTimeChange = (time, timeString) => {
        this.setState({
            recipe: {
                ...this.state.recipe,
                cookingTime: timeString
            }
        })
    }

    submitRecipe = () => {
        axios.post('/api/v1/Recipe', {
            ...this.state.recipe
        })
    }
  
    render() {
        // const { keywords } = this.state;
        // const children = keywords.map(keyword => <Option key={keyword.keywordName}>{keyword.keywordName}</Option>);
        const portions = [1,2,3,4,5,6,7,8,9,10,11,12].map(key => <Option key={key}>{key} portioner </Option>);
        console.log(this.state.recipe)
        return (
            <div className="p-newrecipe">
                <Container>
                    <h2>Nytt recept:</h2>
                    <div className="p-newrecipe__divider">
                        <Input name="recipe.name" onChange={this.fieldsOnChange} placeholder="Receptnamn..." />
                    </div>
                    <div className="p-newrecipe__divider">
                        <TextArea name="recipe.description" placeholder="Testdescription"  autosize={{minRows: 15}} onChange={this.fieldsOnChange} />
                    </div>
                    <div className="p-newrecipe__divider">
                        <TextArea name="recipe.recipeIngredients" placeholder="Ingredienser"  autosize={{minRows: 15}} onChange={this.fieldsOnChange} />
                    </div>
                    <div className="p-newrecipe__divider">
                        <TextArea name="recipe.recipeInstructions" placeholder="Instruktioner"  autosize={{minRows: 15}} onChange={this.fieldsOnChange} />
                    </div>
                    <div className="p-newrecipe__divider">
                        <TimePicker placeholder="Tillagningstid" style={{marginRight: '10px'}} onChange={this.cookingTimeChange} format={format} />
                        <Select defaultValue="4" placeholder="Keywords">
                            {portions}
                        </Select>
                    </div>
                    <div className="p-newrecipe__divider">
                        {/* Keywords:
                        <Select mode="tags" style={{ width: '100%' }} placeholder="Keywords" onDeselect={this.handleDeselect} onSearch={this.handleSearch} onSelect={this.handleSelect}>
                            {children}
                        </Select> */}
                    </div>

                    <div className="p-newrecipe__divider">
      
                    </div>

                <Button onClick={this.submitRecipe}>Spara recept</Button>
                </Container>
                <style jsx>{`
                    .p-newrecipe {
                        padding: 20px 0;
                    }
                    .p-newrecipe__divider {
                        margin-bottom: 20px;
                    }
                `}</style>
            </div>
        )
    }
  }


export default NewRecipePage;