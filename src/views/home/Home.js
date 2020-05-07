import React from 'react';
import WebmotorsService from '../../services/WebmotorsService';
import { FilterModel, ranges, years, prices } from '../../models/FilterModel';
import VehicleButton from '../../components/VehicleButton';
import FilterHeader from '../../components/FilterHeader';
import FilterBody from '../../components/FilterBody';
import Filter from '../../components/Filter';
import ViewContainer from '../../components/ViewContainer';
import Checkbox from '../../components/Checkbox';
import TextInput from '../../components/TextInput';
import SelectInput from '../../components/SelectInput';
import FilterActions from '../../components/FilterActions';
import FilterButton from '../../components/FilterButton';
import VehiclesList from '../../components/VehiclesList';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: new FilterModel(),
            makes: [],
            models: [],
            versions: [],
            vehicles: [],
            ranges: ranges,
            years: years,
            prices: prices,
            loading: false
        };
    }

    componentDidMount() {
        this.getMakes();
        this.getVehicles();
    }

    render() {

        const { filter, makes, models, versions, vehicles, loading, 
            ranges, years, prices } = this.state;

        return (
            <ViewContainer loading={loading}>
                <Filter>
                    <FilterHeader>

                        <VehicleButton onClick={() => this.handleSelectVehicleType('car')} 
                            label="CARROS" selected={filter.type === 'car'} icon="car"/>

                        <VehicleButton onClick={() => this.handleSelectVehicleType('moto')} 
                            label="MOTOS" selected={filter.type === 'moto'} icon="moto"/>

                    </FilterHeader>
                    <FilterBody>

                        <Checkbox label="Novos" value={filter.new} name="new"
                            onChange={this.handleChangeFilter} cols="2"/>

                        <Checkbox label="Usados" value={filter.used} name="used"
                            onChange={this.handleChangeFilter} cols="10"/>

                        <TextInput type="text" className="autocomplete" name="place" 
                            value={filter.place} onChange={this.handleChangeFilter} 
                            placeholder="Digite o local" cols="4"/>

                        <SelectInput className="autocomplete" name="range" cols="2" default="Raio"
                            value={filter.range} onChange={this.handleChangeFilter} options={ranges}
                            labelfield="label" valuefield="value"/>

                        <SelectInput name="make" cols="3" default="Selecione a marca"
                            value={filter.make} onChange={this.handleChangeMake} options={makes}
                            labelfield="Name" valuefield="ID"/>

                        <SelectInput name="model" cols="3" default="Selecione o modelo"
                            value={filter.model} onChange={this.handleChangeModel} options={models}
                            labelfield="Name" valuefield="ID" disabled={!filter.make}/>

                        <SelectInput name="year" cols="3" default="Selecione o ano"
                            value={filter.year} onChange={this.handleChangeFilter} options={years}
                            labelfield="label" valuefield="value"/>

                        <SelectInput name="price" cols="3" default="Selecione a faixa de preço"
                            value={filter.price} onChange={this.handleChangeFilter} options={prices}
                            labelfield="label" valuefield="value"/>

                        <SelectInput name="version" cols="6" default="Selecione a versão"
                            value={filter.version} onChange={this.handleChangeFilter} options={versions}
                            labelfield="Name" valuefield="ID" disabled={!filter.model}/>

                        <FilterActions>

                            <FilterButton className="secondary-button" onClick={this.handleClearFilter} 
                                label="Limpar filtros"/>

                            <FilterButton className="primary-button" onClick={this.getVehicles} 
                                label="VER OFERTAS"/>

                        </FilterActions>

                    </FilterBody>
                </Filter>
                
                <VehiclesList vehicles={vehicles} />

            </ViewContainer>
        );
    }

    handleChangeFilter = event => {
        const value = event.target.type === 'checkbox' ? 
            event.target.checked : event.target.value;

        const filter = this.state.filter;
        filter[event.target.name] = value;

        this.setState({filter});
    }

    handleChangeMake = event => {
        const value = event.target.value;
        const filter = this.state.filter;
        filter[event.target.name] = value;
        filter.model = '';
        filter.version = '';
        this.setState({filter});
        this.getModels(value)
    }

    handleChangeModel = event => {
        const value = event.target.value;
        const filter = this.state.filter;
        filter[event.target.name] = value;
        filter.version = '';
        this.setState({filter});
        this.getVersions(value)
    }

    handleClearFilter = () => {
        this.setState({ filter: new FilterModel() });
    }

    handleSelectVehicleType = type => {
        const filter = this.state.filter;
        filter.type = type;
        this.setState({filter});
    }

    getMakes = async () => {
        try {
            
            const makes = await WebmotorsService.getMakes();
            this.setState({makes});

        } catch (error) {
            console.log(error)
        }
    }

    getModels = async makeId => {
        try {
            
            const models = await WebmotorsService.getModels(makeId);
            this.setState({models});

        } catch (error) {
            console.log(error)
        }
    }

    getVersions = async modelId => {
        try {
            
            const versions = await WebmotorsService.getVersions(modelId);
            this.setState({versions});

        } catch (error) {
            console.log(error)
        }
    }

    getVehicles = async () => {
        
        try {

            this.setState({loading: true});
            const vehicles = await WebmotorsService.getVehicles();
            this.setState({vehicles, loading: false});

        } catch (error) {
            this.setState({loading: false});
            console.log(error)
        }
    }

}

export default Home;
