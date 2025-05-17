<?php
class Af_Comics_Explosm extends Af_ComicFilter {

	function supported() {
		return array("Cyanide and Happiness");
	}

	function process(&$article) {

		if (str_contains($article["link"], "explosm.net/comics")) {

				$doc = new DOMDocument();

				if (@$doc->loadHTML(UrlHelper::fetch(['url' => $article['link']]))) {
					$xpath = new DOMXPath($doc);
					$basenode = $xpath->query('//div[contains(@class, "MainComic__ComicImage")]//img')->item(0);

					if ($basenode) {
						$article["content"] = $doc->saveHTML($basenode);
					}
				}

			return true;
		}

		return false;
	}
}
