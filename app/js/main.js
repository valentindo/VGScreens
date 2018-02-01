$(function(){
	console.log('Ready');

    var base64key = "RkdBVEd6S3VDMzlKWlNhWExrZFdJY2ZpYjpCSEQ4SkpyS3ViVmg0R3F2c0VEOWp6VmdsM01XRjE1dFlQcmpoQkxkYUswNXkxRnViMg==";
    var bearerToken = "AAAAAAAAAAAAAAAAAAAAAAT13QAAAAAAei2F4zKVZdLJHrLWDg3F0T1LZHo%3DrCuBuSwgOw5LcvGDkmp0AF96Q1LalcBgrdj8WCMOf3tbXKSVvb";

    // Get Bearer Token
    // $.ajax({
    // 	url: "https://api.twitter.com/oauth2/token",
    // 	async: true,
    // 	crossDomain: true,
    // 	methode: "POST",
    // 	dataType: "json",
    // 	data: "grant_type=client_credentials",
    // 	headers: {
    // 		"Authorization":"Basic " + base64key,
    // 		"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    // 	}
    // }).done(function(res) {
    // 	console.log(res);
    // });

    // Get user_timeline
    // $.ajax({
    //     url: "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=vgscreenfeed&count=200&exclude_replies=true&include_rts=false",
    //     async: true,
    //     crossDomain: true,
    //     method: "GET",
    //     dataType: "json",
    //     headers: {
    //         "Authorization":"Bearer " + bearerToken
    //     }
    // }).done(function(response){
    //     // console.log(response);
    // });

     var res = [
        {
            "created_at": "Sun Nov 19 17:31:03 +0000 2017",
            "id": 932300197987745793,
            "id_str": "932300197987745793",
            "text": "#Destiny 2 https://t.co/hYqyEMxlfZ",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932300193952919553,
                        "id_str": "932300193952919553",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAyFjyXcAElV4Y.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAyFjyXcAElV4Y.jpg",
                        "url": "https://t.co/hYqyEMxlfZ",
                        "display_url": "pic.twitter.com/hYqyEMxlfZ",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932300197987745793/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932300193952919553,
                        "id_str": "932300193952919553",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAyFjyXcAElV4Y.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAyFjyXcAElV4Y.jpg",
                        "url": "https://t.co/hYqyEMxlfZ",
                        "display_url": "pic.twitter.com/hYqyEMxlfZ",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932300197987745793/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:29:32 +0000 2017",
            "id": 932299815979012096,
            "id_str": "932299815979012096",
            "text": "#Destiny 2 https://t.co/xv9J5RQBSF",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932299811411386369,
                        "id_str": "932299811411386369",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxvStW4AESv_f.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxvStW4AESv_f.jpg",
                        "url": "https://t.co/xv9J5RQBSF",
                        "display_url": "pic.twitter.com/xv9J5RQBSF",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299815979012096/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932299811411386369,
                        "id_str": "932299811411386369",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxvStW4AESv_f.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxvStW4AESv_f.jpg",
                        "url": "https://t.co/xv9J5RQBSF",
                        "display_url": "pic.twitter.com/xv9J5RQBSF",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299815979012096/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:28:58 +0000 2017",
            "id": 932299674849038337,
            "id_str": "932299674849038337",
            "text": "#Destiny 2 https://t.co/EteFLDBtQG",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932299669794934784,
                        "id_str": "932299669794934784",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxnDJXUAAfOa4.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxnDJXUAAfOa4.jpg",
                        "url": "https://t.co/EteFLDBtQG",
                        "display_url": "pic.twitter.com/EteFLDBtQG",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299674849038337/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932299669794934784,
                        "id_str": "932299669794934784",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxnDJXUAAfOa4.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxnDJXUAAfOa4.jpg",
                        "url": "https://t.co/EteFLDBtQG",
                        "display_url": "pic.twitter.com/EteFLDBtQG",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299674849038337/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:28:20 +0000 2017",
            "id": 932299514052038657,
            "id_str": "932299514052038657",
            "text": "#Destiny 2 https://t.co/pVreQaoHGM",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932299509773856768,
                        "id_str": "932299509773856768",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxdvBXcAAeDoY.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxdvBXcAAeDoY.jpg",
                        "url": "https://t.co/pVreQaoHGM",
                        "display_url": "pic.twitter.com/pVreQaoHGM",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299514052038657/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932299509773856768,
                        "id_str": "932299509773856768",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxdvBXcAAeDoY.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxdvBXcAAeDoY.jpg",
                        "url": "https://t.co/pVreQaoHGM",
                        "display_url": "pic.twitter.com/pVreQaoHGM",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299514052038657/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:27:47 +0000 2017",
            "id": 932299378458537985,
            "id_str": "932299378458537985",
            "text": "#Destiny 2 https://t.co/Jzz9XmC4Js",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932299374557876224,
                        "id_str": "932299374557876224",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxV3TXUAA1fRs.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxV3TXUAA1fRs.jpg",
                        "url": "https://t.co/Jzz9XmC4Js",
                        "display_url": "pic.twitter.com/Jzz9XmC4Js",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299378458537985/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932299374557876224,
                        "id_str": "932299374557876224",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAxV3TXUAA1fRs.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAxV3TXUAA1fRs.jpg",
                        "url": "https://t.co/Jzz9XmC4Js",
                        "display_url": "pic.twitter.com/Jzz9XmC4Js",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932299378458537985/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:09:47 +0000 2017",
            "id": 932294846743810050,
            "id_str": "932294846743810050",
            "text": "#Destiny 2 https://t.co/gekLVsJjO8",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294843216392193,
                        "id_str": "932294843216392193",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAtOGvXcAE_6mf.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAtOGvXcAE_6mf.jpg",
                        "url": "https://t.co/gekLVsJjO8",
                        "display_url": "pic.twitter.com/gekLVsJjO8",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294846743810050/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294843216392193,
                        "id_str": "932294843216392193",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAtOGvXcAE_6mf.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAtOGvXcAE_6mf.jpg",
                        "url": "https://t.co/gekLVsJjO8",
                        "display_url": "pic.twitter.com/gekLVsJjO8",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294846743810050/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:09:14 +0000 2017",
            "id": 932294710563131393,
            "id_str": "932294710563131393",
            "text": "#Destiny 2 https://t.co/IPblSpo5od",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294705664098304,
                        "id_str": "932294705664098304",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAtGGUWAAAFIF4.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAtGGUWAAAFIF4.jpg",
                        "url": "https://t.co/IPblSpo5od",
                        "display_url": "pic.twitter.com/IPblSpo5od",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294710563131393/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294705664098304,
                        "id_str": "932294705664098304",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAtGGUWAAAFIF4.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAtGGUWAAAFIF4.jpg",
                        "url": "https://t.co/IPblSpo5od",
                        "display_url": "pic.twitter.com/IPblSpo5od",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294710563131393/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:08:47 +0000 2017",
            "id": 932294597811851274,
            "id_str": "932294597811851274",
            "text": "#Destiny 2 https://t.co/IFvgg0Atpr",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294593818832897,
                        "id_str": "932294593818832897",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAs_lqWsAETWTg.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAs_lqWsAETWTg.jpg",
                        "url": "https://t.co/IFvgg0Atpr",
                        "display_url": "pic.twitter.com/IFvgg0Atpr",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294597811851274/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294593818832897,
                        "id_str": "932294593818832897",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAs_lqWsAETWTg.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAs_lqWsAETWTg.jpg",
                        "url": "https://t.co/IFvgg0Atpr",
                        "display_url": "pic.twitter.com/IFvgg0Atpr",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294597811851274/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:08:23 +0000 2017",
            "id": 932294493545619456,
            "id_str": "932294493545619456",
            "text": "#Destiny 2 https://t.co/VOIpzTAsam",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294490001498113,
                        "id_str": "932294490001498113",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAs5i6X4AETK9a.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAs5i6X4AETK9a.jpg",
                        "url": "https://t.co/VOIpzTAsam",
                        "display_url": "pic.twitter.com/VOIpzTAsam",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294493545619456/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294490001498113,
                        "id_str": "932294490001498113",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAs5i6X4AETK9a.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAs5i6X4AETK9a.jpg",
                        "url": "https://t.co/VOIpzTAsam",
                        "display_url": "pic.twitter.com/VOIpzTAsam",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294493545619456/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:07:51 +0000 2017",
            "id": 932294362314223618,
            "id_str": "932294362314223618",
            "text": "#Destiny 2 https://t.co/5YZtuVhcnI",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294357683703808,
                        "id_str": "932294357683703808",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsx1_WkAAsOcq.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsx1_WkAAsOcq.jpg",
                        "url": "https://t.co/5YZtuVhcnI",
                        "display_url": "pic.twitter.com/5YZtuVhcnI",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294362314223618/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294357683703808,
                        "id_str": "932294357683703808",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsx1_WkAAsOcq.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsx1_WkAAsOcq.jpg",
                        "url": "https://t.co/5YZtuVhcnI",
                        "display_url": "pic.twitter.com/5YZtuVhcnI",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294362314223618/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:07:33 +0000 2017",
            "id": 932294286124646402,
            "id_str": "932294286124646402",
            "text": "#Destiny 2 https://t.co/loPr2VJYZu",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294283159367681,
                        "id_str": "932294283159367681",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAstgXXcAEb_HC.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAstgXXcAEb_HC.jpg",
                        "url": "https://t.co/loPr2VJYZu",
                        "display_url": "pic.twitter.com/loPr2VJYZu",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294286124646402/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294283159367681,
                        "id_str": "932294283159367681",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAstgXXcAEb_HC.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAstgXXcAEb_HC.jpg",
                        "url": "https://t.co/loPr2VJYZu",
                        "display_url": "pic.twitter.com/loPr2VJYZu",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294286124646402/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:07:02 +0000 2017",
            "id": 932294154444591104,
            "id_str": "932294154444591104",
            "text": "#Destiny 2 https://t.co/CyFaaIwq9I",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294151323963392,
                        "id_str": "932294151323963392",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsl1PW0AACCdK.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsl1PW0AACCdK.jpg",
                        "url": "https://t.co/CyFaaIwq9I",
                        "display_url": "pic.twitter.com/CyFaaIwq9I",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294154444591104/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294151323963392,
                        "id_str": "932294151323963392",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsl1PW0AACCdK.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsl1PW0AACCdK.jpg",
                        "url": "https://t.co/CyFaaIwq9I",
                        "display_url": "pic.twitter.com/CyFaaIwq9I",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294154444591104/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:06:40 +0000 2017",
            "id": 932294063826579456,
            "id_str": "932294063826579456",
            "text": "#Destiny 2 https://t.co/xJOQ3ijCwc",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932294060798369792,
                        "id_str": "932294060798369792",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsgkAX4AA1-pj.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsgkAX4AA1-pj.jpg",
                        "url": "https://t.co/xJOQ3ijCwc",
                        "display_url": "pic.twitter.com/xJOQ3ijCwc",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294063826579456/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932294060798369792,
                        "id_str": "932294060798369792",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsgkAX4AA1-pj.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsgkAX4AA1-pj.jpg",
                        "url": "https://t.co/xJOQ3ijCwc",
                        "display_url": "pic.twitter.com/xJOQ3ijCwc",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932294063826579456/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:06:00 +0000 2017",
            "id": 932293894703861763,
            "id_str": "932293894703861763",
            "text": "#Destiny 2 https://t.co/f6UlSY2YNs",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932293891675574273,
                        "id_str": "932293891675574273",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsWt-W0AEDpMK.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsWt-W0AEDpMK.jpg",
                        "url": "https://t.co/f6UlSY2YNs",
                        "display_url": "pic.twitter.com/f6UlSY2YNs",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293894703861763/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932293891675574273,
                        "id_str": "932293891675574273",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsWt-W0AEDpMK.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsWt-W0AEDpMK.jpg",
                        "url": "https://t.co/f6UlSY2YNs",
                        "display_url": "pic.twitter.com/f6UlSY2YNs",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293894703861763/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:04:47 +0000 2017",
            "id": 932293589203382274,
            "id_str": "932293589203382274",
            "text": "#Destiny 2 https://t.co/un5syiEfxV",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932293585281613825,
                        "id_str": "932293585281613825",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsE4kWAAE40ct.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsE4kWAAE40ct.jpg",
                        "url": "https://t.co/un5syiEfxV",
                        "display_url": "pic.twitter.com/un5syiEfxV",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293589203382274/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932293585281613825,
                        "id_str": "932293585281613825",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAsE4kWAAE40ct.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAsE4kWAAE40ct.jpg",
                        "url": "https://t.co/un5syiEfxV",
                        "display_url": "pic.twitter.com/un5syiEfxV",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293589203382274/photo/1",
                        "type": "photo",
                        "sizes": {
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:04:11 +0000 2017",
            "id": 932293437940031488,
            "id_str": "932293437940031488",
            "text": "#Destiny 2 https://t.co/bRsrBviZ7x",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932293433443717120,
                        "id_str": "932293433443717120",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAr8C7XkAA7LC2.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAr8C7XkAA7LC2.jpg",
                        "url": "https://t.co/bRsrBviZ7x",
                        "display_url": "pic.twitter.com/bRsrBviZ7x",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293437940031488/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932293433443717120,
                        "id_str": "932293433443717120",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAr8C7XkAA7LC2.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAr8C7XkAA7LC2.jpg",
                        "url": "https://t.co/bRsrBviZ7x",
                        "display_url": "pic.twitter.com/bRsrBviZ7x",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293437940031488/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:03:29 +0000 2017",
            "id": 932293262269874181,
            "id_str": "932293262269874181",
            "text": "#Destiny 2 https://t.co/DYPx2lumOj",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932293258943885312,
                        "id_str": "932293258943885312",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArx43XcAA6v9e.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArx43XcAA6v9e.jpg",
                        "url": "https://t.co/DYPx2lumOj",
                        "display_url": "pic.twitter.com/DYPx2lumOj",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293262269874181/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932293258943885312,
                        "id_str": "932293258943885312",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArx43XcAA6v9e.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArx43XcAA6v9e.jpg",
                        "url": "https://t.co/DYPx2lumOj",
                        "display_url": "pic.twitter.com/DYPx2lumOj",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293262269874181/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:02:36 +0000 2017",
            "id": 932293038273122305,
            "id_str": "932293038273122305",
            "text": "#Destiny 2 https://t.co/IqvqVCvMyW",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932293035009986560,
                        "id_str": "932293035009986560",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArk2pXUAA1t53.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArk2pXUAA1t53.jpg",
                        "url": "https://t.co/IqvqVCvMyW",
                        "display_url": "pic.twitter.com/IqvqVCvMyW",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293038273122305/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932293035009986560,
                        "id_str": "932293035009986560",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArk2pXUAA1t53.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArk2pXUAA1t53.jpg",
                        "url": "https://t.co/IqvqVCvMyW",
                        "display_url": "pic.twitter.com/IqvqVCvMyW",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932293038273122305/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:02:02 +0000 2017",
            "id": 932292897201950724,
            "id_str": "932292897201950724",
            "text": "#Destiny 2 https://t.co/pA20fIG5vF",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932292893955575808,
                        "id_str": "932292893955575808",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArcpLX0AA45TC.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArcpLX0AA45TC.jpg",
                        "url": "https://t.co/pA20fIG5vF",
                        "display_url": "pic.twitter.com/pA20fIG5vF",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932292897201950724/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932292893955575808,
                        "id_str": "932292893955575808",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArcpLX0AA45TC.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArcpLX0AA45TC.jpg",
                        "url": "https://t.co/pA20fIG5vF",
                        "display_url": "pic.twitter.com/pA20fIG5vF",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932292897201950724/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 17:00:26 +0000 2017",
            "id": 932292494536204289,
            "id_str": "932292494536204289",
            "text": "#Destiny 2 https://t.co/pVBtgyN4On",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932292490652241921,
                        "id_str": "932292490652241921",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArFKwXUAE6vsl.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArFKwXUAE6vsl.jpg",
                        "url": "https://t.co/pVBtgyN4On",
                        "display_url": "pic.twitter.com/pVBtgyN4On",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932292494536204289/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932292490652241921,
                        "id_str": "932292490652241921",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPArFKwXUAE6vsl.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPArFKwXUAE6vsl.jpg",
                        "url": "https://t.co/pVBtgyN4On",
                        "display_url": "pic.twitter.com/pVBtgyN4On",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932292494536204289/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:28:36 +0000 2017",
            "id": 932284483222548480,
            "id_str": "932284483222548480",
            "text": "#Destiny 2 https://t.co/noASOfYUbF",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932284479107985408,
                        "id_str": "932284479107985408",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAjy1bXcAAs2pA.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAjy1bXcAAs2pA.jpg",
                        "url": "https://t.co/noASOfYUbF",
                        "display_url": "pic.twitter.com/noASOfYUbF",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932284483222548480/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932284479107985408,
                        "id_str": "932284479107985408",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAjy1bXcAAs2pA.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAjy1bXcAAs2pA.jpg",
                        "url": "https://t.co/noASOfYUbF",
                        "display_url": "pic.twitter.com/noASOfYUbF",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932284483222548480/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:28:09 +0000 2017",
            "id": 932284371662499841,
            "id_str": "932284371662499841",
            "text": "#Destiny 2 https://t.co/YSpBlXGMwl",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932284367883460608,
                        "id_str": "932284367883460608",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAjsXFX4AAQxyl.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAjsXFX4AAQxyl.jpg",
                        "url": "https://t.co/YSpBlXGMwl",
                        "display_url": "pic.twitter.com/YSpBlXGMwl",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932284371662499841/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932284367883460608,
                        "id_str": "932284367883460608",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAjsXFX4AAQxyl.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAjsXFX4AAQxyl.jpg",
                        "url": "https://t.co/YSpBlXGMwl",
                        "display_url": "pic.twitter.com/YSpBlXGMwl",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932284371662499841/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:25:46 +0000 2017",
            "id": 932283768571940868,
            "id_str": "932283768571940868",
            "text": "#Destiny 2 https://t.co/QU3ifdQWn7",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932283764230803457,
                        "id_str": "932283764230803457",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAjJOTXUAEOX3J.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAjJOTXUAEOX3J.jpg",
                        "url": "https://t.co/QU3ifdQWn7",
                        "display_url": "pic.twitter.com/QU3ifdQWn7",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283768571940868/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932283764230803457,
                        "id_str": "932283764230803457",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAjJOTXUAEOX3J.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAjJOTXUAEOX3J.jpg",
                        "url": "https://t.co/QU3ifdQWn7",
                        "display_url": "pic.twitter.com/QU3ifdQWn7",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283768571940868/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:25:04 +0000 2017",
            "id": 932283595397451777,
            "id_str": "932283595397451777",
            "text": "#Destiny 2 https://t.co/44yCO1Ffr4",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932283590997667840,
                        "id_str": "932283590997667840",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAi_I9XcAAKasR.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAi_I9XcAAKasR.jpg",
                        "url": "https://t.co/44yCO1Ffr4",
                        "display_url": "pic.twitter.com/44yCO1Ffr4",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283595397451777/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932283590997667840,
                        "id_str": "932283590997667840",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAi_I9XcAAKasR.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAi_I9XcAAKasR.jpg",
                        "url": "https://t.co/44yCO1Ffr4",
                        "display_url": "pic.twitter.com/44yCO1Ffr4",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283595397451777/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:23:29 +0000 2017",
            "id": 932283197806784512,
            "id_str": "932283197806784512",
            "text": "#Destiny 2 https://t.co/CQCPy8RqRy",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932283194895929344,
                        "id_str": "932283194895929344",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAioFXWkAAO1O5.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAioFXWkAAO1O5.jpg",
                        "url": "https://t.co/CQCPy8RqRy",
                        "display_url": "pic.twitter.com/CQCPy8RqRy",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283197806784512/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932283194895929344,
                        "id_str": "932283194895929344",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAioFXWkAAO1O5.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAioFXWkAAO1O5.jpg",
                        "url": "https://t.co/CQCPy8RqRy",
                        "display_url": "pic.twitter.com/CQCPy8RqRy",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283197806784512/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:22:51 +0000 2017",
            "id": 932283035399151617,
            "id_str": "932283035399151617",
            "text": "#Destiny 2 https://t.co/6x77qA8d6C",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932283031783641088,
                        "id_str": "932283031783641088",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAieluWkAANZpP.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAieluWkAANZpP.jpg",
                        "url": "https://t.co/6x77qA8d6C",
                        "display_url": "pic.twitter.com/6x77qA8d6C",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283035399151617/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932283031783641088,
                        "id_str": "932283031783641088",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAieluWkAANZpP.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAieluWkAANZpP.jpg",
                        "url": "https://t.co/6x77qA8d6C",
                        "display_url": "pic.twitter.com/6x77qA8d6C",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932283035399151617/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:20:34 +0000 2017",
            "id": 932282460284620801,
            "id_str": "932282460284620801",
            "text": "#Destiny 2 https://t.co/P63Lau0rSK",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932282457029783552,
                        "id_str": "932282457029783552",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAh9ImWsAAwWx3.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAh9ImWsAAwWx3.jpg",
                        "url": "https://t.co/P63Lau0rSK",
                        "display_url": "pic.twitter.com/P63Lau0rSK",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932282460284620801/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932282457029783552,
                        "id_str": "932282457029783552",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAh9ImWsAAwWx3.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAh9ImWsAAwWx3.jpg",
                        "url": "https://t.co/P63Lau0rSK",
                        "display_url": "pic.twitter.com/P63Lau0rSK",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932282460284620801/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:19:31 +0000 2017",
            "id": 932282196626411520,
            "id_str": "932282196626411520",
            "text": "#Destiny 2 https://t.co/VnbvwL8lU9",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932282193078046720,
                        "id_str": "932282193078046720",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAhtxTW0AArD6H.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAhtxTW0AArD6H.jpg",
                        "url": "https://t.co/VnbvwL8lU9",
                        "display_url": "pic.twitter.com/VnbvwL8lU9",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932282196626411520/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932282193078046720,
                        "id_str": "932282193078046720",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAhtxTW0AArD6H.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAhtxTW0AArD6H.jpg",
                        "url": "https://t.co/VnbvwL8lU9",
                        "display_url": "pic.twitter.com/VnbvwL8lU9",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932282196626411520/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:19:06 +0000 2017",
            "id": 932282091903086593,
            "id_str": "932282091903086593",
            "text": "#Destiny 2 https://t.co/MObSfqvNjN",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932282088639942657,
                        "id_str": "932282088639942657",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAhnsPX0AEognE.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAhnsPX0AEognE.jpg",
                        "url": "https://t.co/MObSfqvNjN",
                        "display_url": "pic.twitter.com/MObSfqvNjN",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932282091903086593/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932282088639942657,
                        "id_str": "932282088639942657",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAhnsPX0AEognE.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAhnsPX0AEognE.jpg",
                        "url": "https://t.co/MObSfqvNjN",
                        "display_url": "pic.twitter.com/MObSfqvNjN",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932282091903086593/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:17:42 +0000 2017",
            "id": 932281740818776065,
            "id_str": "932281740818776065",
            "text": "#Destiny 2 https://t.co/MygzcIiGvj",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932281737320726528,
                        "id_str": "932281737320726528",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAhTPeWAAA1p4G.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAhTPeWAAA1p4G.jpg",
                        "url": "https://t.co/MygzcIiGvj",
                        "display_url": "pic.twitter.com/MygzcIiGvj",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932281740818776065/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932281737320726528,
                        "id_str": "932281737320726528",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAhTPeWAAA1p4G.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAhTPeWAAA1p4G.jpg",
                        "url": "https://t.co/MygzcIiGvj",
                        "display_url": "pic.twitter.com/MygzcIiGvj",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932281740818776065/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:16:09 +0000 2017",
            "id": 932281350895390720,
            "id_str": "932281350895390720",
            "text": "#Destiny 2 https://t.co/i3zPqfiU2H",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932281346877255680,
                        "id_str": "932281346877255680",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAg8g9XcAAhlyf.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAg8g9XcAAhlyf.jpg",
                        "url": "https://t.co/i3zPqfiU2H",
                        "display_url": "pic.twitter.com/i3zPqfiU2H",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932281350895390720/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932281346877255680,
                        "id_str": "932281346877255680",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAg8g9XcAAhlyf.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAg8g9XcAAhlyf.jpg",
                        "url": "https://t.co/i3zPqfiU2H",
                        "display_url": "pic.twitter.com/i3zPqfiU2H",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932281350895390720/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:14:41 +0000 2017",
            "id": 932280981234618368,
            "id_str": "932280981234618368",
            "text": "#Destiny 2 https://t.co/uzku2bm39J",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932280977849712642,
                        "id_str": "932280977849712642",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAgnCOWAAI1lgs.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAgnCOWAAI1lgs.jpg",
                        "url": "https://t.co/uzku2bm39J",
                        "display_url": "pic.twitter.com/uzku2bm39J",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932280981234618368/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932280977849712642,
                        "id_str": "932280977849712642",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAgnCOWAAI1lgs.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAgnCOWAAI1lgs.jpg",
                        "url": "https://t.co/uzku2bm39J",
                        "display_url": "pic.twitter.com/uzku2bm39J",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932280981234618368/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:13:56 +0000 2017",
            "id": 932280792750882818,
            "id_str": "932280792750882818",
            "text": "#Destiny 2 https://t.co/r224sr8Goc",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932280789424844802,
                        "id_str": "932280789424844802",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAgcESWsAIeqSU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAgcESWsAIeqSU.jpg",
                        "url": "https://t.co/r224sr8Goc",
                        "display_url": "pic.twitter.com/r224sr8Goc",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932280792750882818/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932280789424844802,
                        "id_str": "932280789424844802",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAgcESWsAIeqSU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAgcESWsAIeqSU.jpg",
                        "url": "https://t.co/r224sr8Goc",
                        "display_url": "pic.twitter.com/r224sr8Goc",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932280792750882818/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:11:37 +0000 2017",
            "id": 932280208153022470,
            "id_str": "932280208153022470",
            "text": "#Destiny 2 https://t.co/0mzvChMk5b",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932280205019893763,
                        "id_str": "932280205019893763",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAf6DNW0AMsVBa.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAf6DNW0AMsVBa.jpg",
                        "url": "https://t.co/0mzvChMk5b",
                        "display_url": "pic.twitter.com/0mzvChMk5b",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932280208153022470/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932280205019893763,
                        "id_str": "932280205019893763",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAf6DNW0AMsVBa.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAf6DNW0AMsVBa.jpg",
                        "url": "https://t.co/0mzvChMk5b",
                        "display_url": "pic.twitter.com/0mzvChMk5b",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932280208153022470/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:10:10 +0000 2017",
            "id": 932279845068988416,
            "id_str": "932279845068988416",
            "text": "#Destiny 2 https://t.co/WRr4upLKZT",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932279840400691200,
                        "id_str": "932279840400691200",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAfk05XUAAudlS.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAfk05XUAAudlS.jpg",
                        "url": "https://t.co/WRr4upLKZT",
                        "display_url": "pic.twitter.com/WRr4upLKZT",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932279845068988416/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932279840400691200,
                        "id_str": "932279840400691200",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAfk05XUAAudlS.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAfk05XUAAudlS.jpg",
                        "url": "https://t.co/WRr4upLKZT",
                        "display_url": "pic.twitter.com/WRr4upLKZT",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932279845068988416/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:07:32 +0000 2017",
            "id": 932279182746374144,
            "id_str": "932279182746374144",
            "text": "#Destiny 2 https://t.co/AmvZrUcrKT",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932279177725739009,
                        "id_str": "932279177725739009",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAe-QPWAAE-TfG.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAe-QPWAAE-TfG.jpg",
                        "url": "https://t.co/AmvZrUcrKT",
                        "display_url": "pic.twitter.com/AmvZrUcrKT",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932279182746374144/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932279177725739009,
                        "id_str": "932279177725739009",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAe-QPWAAE-TfG.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAe-QPWAAE-TfG.jpg",
                        "url": "https://t.co/AmvZrUcrKT",
                        "display_url": "pic.twitter.com/AmvZrUcrKT",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932279182746374144/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 16:05:26 +0000 2017",
            "id": 932278652464783362,
            "id_str": "932278652464783362",
            "text": "#Destiny 2 https://t.co/OhsBQPcDEM",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932278648006234112,
                        "id_str": "932278648006234112",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAefa4X0AA61mU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAefa4X0AA61mU.jpg",
                        "url": "https://t.co/OhsBQPcDEM",
                        "display_url": "pic.twitter.com/OhsBQPcDEM",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932278652464783362/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932278648006234112,
                        "id_str": "932278648006234112",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DPAefa4X0AA61mU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DPAefa4X0AA61mU.jpg",
                        "url": "https://t.co/OhsBQPcDEM",
                        "display_url": "pic.twitter.com/OhsBQPcDEM",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932278652464783362/photo/1",
                        "type": "photo",
                        "sizes": {
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:37:36 +0000 2017",
            "id": 932075356701392896,
            "id_str": "932075356701392896",
            "text": "#Destiny 2 https://t.co/HRZFb1aedA",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932075352947650560,
                        "id_str": "932075352947650560",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lmFxXcAA-uUz.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lmFxXcAA-uUz.jpg",
                        "url": "https://t.co/HRZFb1aedA",
                        "display_url": "pic.twitter.com/HRZFb1aedA",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932075356701392896/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932075352947650560,
                        "id_str": "932075352947650560",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lmFxXcAA-uUz.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lmFxXcAA-uUz.jpg",
                        "url": "https://t.co/HRZFb1aedA",
                        "display_url": "pic.twitter.com/HRZFb1aedA",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932075356701392896/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:36:57 +0000 2017",
            "id": 932075190795821056,
            "id_str": "932075190795821056",
            "text": "#Destiny 2 https://t.co/ZIhavuIJ7D",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932075186911895552,
                        "id_str": "932075186911895552",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lcbPW4AALIKe.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lcbPW4AALIKe.jpg",
                        "url": "https://t.co/ZIhavuIJ7D",
                        "display_url": "pic.twitter.com/ZIhavuIJ7D",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932075190795821056/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932075186911895552,
                        "id_str": "932075186911895552",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lcbPW4AALIKe.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lcbPW4AALIKe.jpg",
                        "url": "https://t.co/ZIhavuIJ7D",
                        "display_url": "pic.twitter.com/ZIhavuIJ7D",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932075190795821056/photo/1",
                        "type": "photo",
                        "sizes": {
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:36:10 +0000 2017",
            "id": 932074995299307521,
            "id_str": "932074995299307521",
            "text": "#Destiny 2 https://t.co/XQrtCn3O5E",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932074991956451328,
                        "id_str": "932074991956451328",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lRE-W4AApFit.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lRE-W4AApFit.jpg",
                        "url": "https://t.co/XQrtCn3O5E",
                        "display_url": "pic.twitter.com/XQrtCn3O5E",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074995299307521/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932074991956451328,
                        "id_str": "932074991956451328",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lRE-W4AApFit.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lRE-W4AApFit.jpg",
                        "url": "https://t.co/XQrtCn3O5E",
                        "display_url": "pic.twitter.com/XQrtCn3O5E",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074995299307521/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:35:23 +0000 2017",
            "id": 932074798921986049,
            "id_str": "932074798921986049",
            "text": "#Destiny 2 https://t.co/IDuRdYHDxr",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932074795096821770,
                        "id_str": "932074795096821770",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lFnnXUAor5sd.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lFnnXUAor5sd.jpg",
                        "url": "https://t.co/IDuRdYHDxr",
                        "display_url": "pic.twitter.com/IDuRdYHDxr",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074798921986049/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932074795096821770,
                        "id_str": "932074795096821770",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9lFnnXUAor5sd.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9lFnnXUAor5sd.jpg",
                        "url": "https://t.co/IDuRdYHDxr",
                        "display_url": "pic.twitter.com/IDuRdYHDxr",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074798921986049/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:34:54 +0000 2017",
            "id": 932074674867097600,
            "id_str": "932074674867097600",
            "text": "#Destiny 2 https://t.co/aZZ4eS3q29",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932074670547001344,
                        "id_str": "932074670547001344",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9k-XoX4AAPt7P.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9k-XoX4AAPt7P.jpg",
                        "url": "https://t.co/aZZ4eS3q29",
                        "display_url": "pic.twitter.com/aZZ4eS3q29",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074674867097600/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932074670547001344,
                        "id_str": "932074670547001344",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9k-XoX4AAPt7P.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9k-XoX4AAPt7P.jpg",
                        "url": "https://t.co/aZZ4eS3q29",
                        "display_url": "pic.twitter.com/aZZ4eS3q29",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074674867097600/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:34:21 +0000 2017",
            "id": 932074539202371584,
            "id_str": "932074539202371584",
            "text": "#Destiny 2 https://t.co/RRiyc0Rr3v",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932074535666573312,
                        "id_str": "932074535666573312",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9k2hKX4AAI5fc.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9k2hKX4AAI5fc.jpg",
                        "url": "https://t.co/RRiyc0Rr3v",
                        "display_url": "pic.twitter.com/RRiyc0Rr3v",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074539202371584/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932074535666573312,
                        "id_str": "932074535666573312",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9k2hKX4AAI5fc.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9k2hKX4AAI5fc.jpg",
                        "url": "https://t.co/RRiyc0Rr3v",
                        "display_url": "pic.twitter.com/RRiyc0Rr3v",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074539202371584/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:33:51 +0000 2017",
            "id": 932074412806934528,
            "id_str": "932074412806934528",
            "text": "#Destiny 2 https://t.co/GK2hFqQqAJ",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932074408604258304,
                        "id_str": "932074408604258304",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kvH0W0AA3nvL.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kvH0W0AA3nvL.jpg",
                        "url": "https://t.co/GK2hFqQqAJ",
                        "display_url": "pic.twitter.com/GK2hFqQqAJ",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074412806934528/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932074408604258304,
                        "id_str": "932074408604258304",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kvH0W0AA3nvL.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kvH0W0AA3nvL.jpg",
                        "url": "https://t.co/GK2hFqQqAJ",
                        "display_url": "pic.twitter.com/GK2hFqQqAJ",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074412806934528/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:32:45 +0000 2017",
            "id": 932074136171663360,
            "id_str": "932074136171663360",
            "text": "#Destiny 2 https://t.co/F4yrjmbQNZ",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932074132308742144,
                        "id_str": "932074132308742144",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kfCiX0AANiPU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kfCiX0AANiPU.jpg",
                        "url": "https://t.co/F4yrjmbQNZ",
                        "display_url": "pic.twitter.com/F4yrjmbQNZ",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074136171663360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932074132308742144,
                        "id_str": "932074132308742144",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kfCiX0AANiPU.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kfCiX0AANiPU.jpg",
                        "url": "https://t.co/F4yrjmbQNZ",
                        "display_url": "pic.twitter.com/F4yrjmbQNZ",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932074136171663360/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:31:58 +0000 2017",
            "id": 932073939010031616,
            "id_str": "932073939010031616",
            "text": "#Destiny 2 https://t.co/y0mfrnlMuE",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932073934954074112,
                        "id_str": "932073934954074112",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kTjVWkAA08sR.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kTjVWkAA08sR.jpg",
                        "url": "https://t.co/y0mfrnlMuE",
                        "display_url": "pic.twitter.com/y0mfrnlMuE",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073939010031616/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932073934954074112,
                        "id_str": "932073934954074112",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kTjVWkAA08sR.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kTjVWkAA08sR.jpg",
                        "url": "https://t.co/y0mfrnlMuE",
                        "display_url": "pic.twitter.com/y0mfrnlMuE",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073939010031616/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:31:15 +0000 2017",
            "id": 932073757845475328,
            "id_str": "932073757845475328",
            "text": "#Destiny 2 https://t.co/wbQNrdv2eW",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932073753680412672,
                        "id_str": "932073753680412672",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kJACWAAAaRbc.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kJACWAAAaRbc.jpg",
                        "url": "https://t.co/wbQNrdv2eW",
                        "display_url": "pic.twitter.com/wbQNrdv2eW",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073757845475328/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932073753680412672,
                        "id_str": "932073753680412672",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9kJACWAAAaRbc.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9kJACWAAAaRbc.jpg",
                        "url": "https://t.co/wbQNrdv2eW",
                        "display_url": "pic.twitter.com/wbQNrdv2eW",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073757845475328/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:30:22 +0000 2017",
            "id": 932073536092385281,
            "id_str": "932073536092385281",
            "text": "#Destiny 2 https://t.co/cPZUaVhoMW",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932073533034893312,
                        "id_str": "932073533034893312",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9j8KEWkAAFKnE.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9j8KEWkAAFKnE.jpg",
                        "url": "https://t.co/cPZUaVhoMW",
                        "display_url": "pic.twitter.com/cPZUaVhoMW",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073536092385281/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932073533034893312,
                        "id_str": "932073533034893312",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9j8KEWkAAFKnE.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9j8KEWkAAFKnE.jpg",
                        "url": "https://t.co/cPZUaVhoMW",
                        "display_url": "pic.twitter.com/cPZUaVhoMW",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073536092385281/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:29:09 +0000 2017",
            "id": 932073230365585408,
            "id_str": "932073230365585408",
            "text": "#Destiny 2 https://t.co/1xXfdVSbTb",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932073226968141824,
                        "id_str": "932073226968141824",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9jqV4WkAA73xO.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9jqV4WkAA73xO.jpg",
                        "url": "https://t.co/1xXfdVSbTb",
                        "display_url": "pic.twitter.com/1xXfdVSbTb",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073230365585408/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932073226968141824,
                        "id_str": "932073226968141824",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9jqV4WkAA73xO.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9jqV4WkAA73xO.jpg",
                        "url": "https://t.co/1xXfdVSbTb",
                        "display_url": "pic.twitter.com/1xXfdVSbTb",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932073230365585408/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        },
        {
            "created_at": "Sun Nov 19 02:24:13 +0000 2017",
            "id": 932071989296189440,
            "id_str": "932071989296189440",
            "text": "#Destiny 2 https://t.co/RtAzMF7J2L",
            "truncated": false,
            "entities": {
                "hashtags": [
                    {
                        "text": "Destiny",
                        "indices": [
                            0,
                            8
                        ]
                    }
                ],
                "symbols": [],
                "user_mentions": [],
                "urls": [],
                "media": [
                    {
                        "id": 932071985504546822,
                        "id_str": "932071985504546822",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9iiFEXcAYdkEm.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9iiFEXcAYdkEm.jpg",
                        "url": "https://t.co/RtAzMF7J2L",
                        "display_url": "pic.twitter.com/RtAzMF7J2L",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932071989296189440/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "extended_entities": {
                "media": [
                    {
                        "id": 932071985504546822,
                        "id_str": "932071985504546822",
                        "indices": [
                            11,
                            34
                        ],
                        "media_url": "http://pbs.twimg.com/media/DO9iiFEXcAYdkEm.jpg",
                        "media_url_https": "https://pbs.twimg.com/media/DO9iiFEXcAYdkEm.jpg",
                        "url": "https://t.co/RtAzMF7J2L",
                        "display_url": "pic.twitter.com/RtAzMF7J2L",
                        "expanded_url": "https://twitter.com/vgscreenfeed/status/932071989296189440/photo/1",
                        "type": "photo",
                        "sizes": {
                            "thumb": {
                                "w": 150,
                                "h": 150,
                                "resize": "crop"
                            },
                            "small": {
                                "w": 680,
                                "h": 383,
                                "resize": "fit"
                            },
                            "large": {
                                "w": 2048,
                                "h": 1152,
                                "resize": "fit"
                            },
                            "medium": {
                                "w": 1200,
                                "h": 675,
                                "resize": "fit"
                            }
                        }
                    }
                ]
            },
            "source": "<a href=\"http://www.playstation.com\" rel=\"nofollow\">PlayStation(R)4</a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 932069625050910720,
                "id_str": "932069625050910720",
                "name": "vgscreenfeed",
                "screen_name": "vgscreenfeed",
                "location": "",
                "description": "",
                "url": null,
                "entities": {
                    "description": {
                        "urls": []
                    }
                },
                "protected": false,
                "followers_count": 0,
                "friends_count": 0,
                "listed_count": 0,
                "created_at": "Sun Nov 19 02:14:50 +0000 2017",
                "favourites_count": 0,
                "utc_offset": -28800,
                "time_zone": "Pacific Time (US & Canada)",
                "geo_enabled": false,
                "verified": false,
                "statuses_count": 50,
                "lang": "fr",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "000000",
                "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
                "profile_background_tile": false,
                "profile_image_url": "http://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_image_url_https": "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png",
                "profile_link_color": "19CF86",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": false,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": true,
                "following": null,
                "follow_request_sent": null,
                "notifications": null,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "und"
        }
    ]

    console.log(res);
    console.log(res[0]);

	for (var i = 0; i < res.length; i++) {
		var url = res[i].entities.media[0].media_url;
		$(".gallery").append("<div class='item'><img src='"+ url +"' alt=''></div>");
	}

	// EVENTS

	// Burger Menu
	$(".burger-menu").click(function() {
		$("nav").toggleClass("active-menu");
		$("main").toggleClass("push-content");
		$(".shadow").toggleClass("shadow-active");
		$(".imgFocus").toggleClass("push-content");
	});

	// Focus on image
	$(".item").click(function() {
		var focusUrl = $(this).find("img").attr("src");
		$(".imgFocus img").attr("src", focusUrl);
		$(".imgFocus").toggleClass("focus-active");
		$(".shadowFocus").toggleClass("shadow-active");
	});

	// Stop focus
	$(".closeButton").click(function() {
		$(".imgFocus").toggleClass("focus-active");
		$(".shadowFocus").toggleClass("shadow-active");
	});

	$(".shadowFocus").click(function() {
		$(".imgFocus").toggleClass("focus-active");
		$(".shadowFocus").toggleClass("shadow-active");
	});
});
