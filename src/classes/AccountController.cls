public with sharing class AccountController {
    @AuraEnabled
    public static List<Account> findAll() {
        return [SELECT id, name, Location__Latitude__s, Location__Longitude__s
                FROM Account
                WHERE Location__Latitude__s != NULL AND Location__Longitude__s != NULL
                LIMIT 50];
    }
    
    @AuraEnabled
    public static List<Account> getAccountsWithOffset(String pageSize, String pageNumber){
        Integer ps = Integer.valueOf(pageSize);
        Integer pn = Integer.valueOf(pageNumber)-1;
        
        List<Account> accounts = [SELECT
                                  Id, Name, Phone, Rating, Active__c
                                  FROM Account LIMIT :Integer.valueOf(ps) OFFSET :(ps*pn)];
        return accounts;
    }
}