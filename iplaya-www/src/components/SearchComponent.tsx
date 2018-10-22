import * as React from 'react';

interface ISearchProps {
  domain: string,
  query: string,
  onSearchQueryChange: (query: string) => void,
  onSearchDomainChange: (domain: string) => void,
}

export default class SearchComponent extends React.Component<ISearchProps, {}> {
    public constructor(props: ISearchProps) {
        super(props);
        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onSearchDomainChange = this.onSearchDomainChange.bind(this);
    }

    public render() {
        return (
            <div className='searchBox'>            
                <form method='get' action={`/${this.props.domain}`}>
                    <input
                        type="text"
                        placeholder='Search'
                        name='query'
                        value={this.props.query}
                        onChange={this.onSearchQueryChange}
                    />
                    <select name='domain' value={this.props.domain} onChange={this.onSearchDomainChange}>
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
}
