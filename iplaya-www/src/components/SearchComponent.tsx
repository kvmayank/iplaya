import * as React from 'react';

interface ISearchProps {
  domain: string,
  query: string,
  onSearch: (query: string) => void,
  onSearchQueryChange: (query: string) => void,
  onSearchDomainChange: (domain: string) => void,
}

export default class SearchComponent extends React.Component<ISearchProps, {}> {
    public constructor(props: ISearchProps) {
        super(props);
        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearchDomainChange = this.onSearchDomainChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    public render() {
        return (
            <div className='searchBox'>            
                <form onSubmit={this.onSearch}>
                    <input
                        type="text"
                        placeholder='Search'
                        value={this.props.query}
                        onChange={this.onSearchQueryChange}
                    />
                    <select value={this.props.domain} onChange={this.onSearchDomainChange}>
                        <option value="events">Events</option>
                        <option value="camps">Camps</option>
                        <option value="arts">Arts</option>
                    </select>
                </form>
            </div>
        );
    }

    private onSearchQueryChange(event: any): void {
        this.props.onSearchQueryChange(event.target.value);
    }
    
    private onSearchDomainChange(event: any): void {
        this.props.onSearchDomainChange(event.target.value);
    }
    
    private onSearch(event: any): void {
        this.props.onSearch(this.props.query);
        event.preventDefault();
    }
}
