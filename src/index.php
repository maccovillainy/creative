
	<?php
		require_once 'libs/Smarty.class.php';

		$smarty = new Smarty;

		$smarty->template_dir = 'tamplates';
		$smarty->compile_dir = 'template_c';
		$smarty->config_dir = 'config';
		$smarty->cache_dir = 'chache';

		$title = 'i`m title';

		$smarty->assign('title', $title);
		$smarty->display('index.html');
	?>
