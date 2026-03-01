const activeDammV2Pools = dammV2Pools.filter((pool: any) => 
  pool.type === 'damm2' && 
  pool.isActive && 
  pool.tvl > 1000  // Min $1K TVL
);