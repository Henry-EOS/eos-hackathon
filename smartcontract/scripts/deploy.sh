SC_PATH=/Volumes/Data/workspace/opensource/eos-hackathon/smartcontract
SC_NAME=pen

cleos create account eosio $SC_NAME EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV

cleos set contract $SC_NAME $SC_PATH/ $SC_PATH/$SC_NAME.wast $SC_PATH/$SC_NAME.abi -p $SC_NAME

cleos get account $SC_NAME