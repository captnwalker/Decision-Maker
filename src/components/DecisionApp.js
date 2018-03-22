import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import InfoModal from './InfoModal';
import OptionModal from './OptionModal';


export default class DecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    // handleCloseInfoModal() {
    //     this.setState({ showModal: false });
    // }


    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ 
            selectedOption: undefined,
         }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This choice already exists';
        };

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        const subtitle = 'Can\'t decide?? Let your computer do it!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <InfoModal                        
                    />
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                </div>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                    
            </div>
        );
    }
}