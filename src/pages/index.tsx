import * as React from 'react';
import { AggregatorContainer } from '~/components/Aggregator';
import ConnectButton from '~/components/Aggregator/ConnectButton';
import { getTokenList } from '~/components/Aggregator/getTokenList';
import { useAutoConnect } from '~/hooks/useAutoConnect';
import Layout from '~/layout';

export async function getStaticProps() {
	return getTokenList();
}

export default function Aggregator(props) {
	useAutoConnect();
	return (
		<Layout title={`Meta-dex aggregator - DefiLlama`} defaultSEO>
			<ConnectButton />
			<AggregatorContainer tokenlist={props.tokenlist} />
		</Layout>
	);
}
