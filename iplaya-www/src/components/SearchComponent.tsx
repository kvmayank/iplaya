import * as React from 'react';

interface ISearchProps {
  query: string,
  onSearch: (query: string) => void,
  onHandleChange: (query: string) => void,
}

export default class SearchComponent extends React.Component<ISearchProps, {}> {
    public constructor(props: ISearchProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    public render() {
        return (
            <form onSubmit={this.onSearch}>
                <input
                    type="text"
                    placeholder="Search.."
                    value={this.props.query}
                    onChange={this.onChange}
                />
            </form>
        );
    }
    
    private onChange(event: any): void {
        this.props.onHandleChange(event.target.value);
    }
    
    private onSearch(event: any): void {
        this.props.onSearch(this.props.query);
        event.preventDefault();
    }
}
