
Paranoid-Chat
========										

Features
========

  * Client side AES-256-CBC encryption/decryption (the server is just a messenger)
  * 256 bit key derived from your passphrase using PBKDF2
  * Message is torched after a configurable delay, default is 600s.
  * Optional nicknames
  * Quick-links (not recommended!) using http://server/#Room:Passphrase
  * Super simple setup
  * Notification sounds (mutable)
  * Native popup notifications
  * Configurable page title
  * Heroku support



Heroku setup 
========

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/GrayHatSecurityOfficialRepository/Paranoid-Chat)

Usage
========

```

Available commands:

Client:                                                    			
	/key		StrongPassphrase	Sets encryption key                 
	/nick		NickName			Sets an optional nick                   
	/mute  							Audio on									
	/unmute  						Audio off									
	/clear							Clear on-screen buffer                      
	/help							This                                        
	/title							Set your local page title					
	/torch		AfterSeconds		Console messages are torched  		
									after this amount of seconds 					
									(default 600).									

Room:                                                    				
	/join		RoomId				Join a room	                            
	/leave							Leave the room                              
	/count							Count participants                          

Host:  		                                                    	
	/hosts							List available hosts                   		
	/connect	HostIndex			Connect to selected host               	
	/disconnect						Disconnect from host    			        

You can select any of the five last commands/messages with up/down key.

Due to security reasons, /key command is not saved, and command         
history is  automatically cleared after one minute of inactivity.       

It is highly recommended to use incognito mode while chatting, 
to prevent browsers from keeping history or cache.            


```
