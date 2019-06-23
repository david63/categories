<?php
/**
*
* @package Organise Categories Extension
* @copyright (c) 2016 david63
* @license GNU General Public License, version 2 (GPL-2.0)
*
*/

namespace david63\categories\event;

/**
* @ignore
*/
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

use phpbb\language\language;

/**
* Event listener
*/
class listener implements EventSubscriberInterface
{
	/** @var \phpbb\language\language */
	protected $language;

	/**
	* Constructor for listener
	*
	* @param \phpbb\language\language	$language	Language object
	*
	* @return \david63\categories\event\listener
	*
	* @access public
	*/
	public function __construct(language $language)
	{
		$this->language = $language;
	}

	/**
	* Assign functions defined in this class to event listeners in the core
	*
	* @return array
	* @static
	* @access public
	*/
	static public function getSubscribedEvents()
	{
		return array(
			'core.viewforum_get_topic_data' => 'add_category_language',
		);
	}

	/**
	* Load common category language files into viewtopic
	*
	* @param object $event The event object
	* @return null
	* @access public
	*/
	public function add_category_language($event)
	{
		$this->language->add_lang('categories', 'david63/categories');
	}
}
