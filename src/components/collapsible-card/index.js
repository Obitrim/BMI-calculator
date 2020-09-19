import React, { useState } from 'react';
import './collapsible-card.css';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Index = ({title, content}) => {
	const [collapsed, setCollapsed] = useState(true);

	function toggleHandler(){
		if(collapsed){
			setCollapsed(false);
		} else {
			setCollapsed(true);
		}
	}

	return (
		<>
			<button type="button" className="CollapsibleCard__Toggler" onClick={ toggleHandler }>
				<span className="CollapsibleCard__Toggler__Text">{ title }</span>
				{collapsed ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
			</button>
			<article className={`CollapsibleCard__Content ${collapsed && 'CollapsibleCard__Content--Collapsed'}`}>
				<p className="CollapsibleCard__Content__Inner">{ content }</p>
			</article>
		</>
	)
}

export default Index;