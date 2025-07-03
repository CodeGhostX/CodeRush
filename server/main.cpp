#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin>>n;
    string s;
    cin>>s;
    int i = 0, j = n-1;
    while(j>=i){
        if(s[i]!=s[j]){
            cout<<0<<endl;
            return 0;
        }
    }
    cout<<1<<endl;
    return 0;
}